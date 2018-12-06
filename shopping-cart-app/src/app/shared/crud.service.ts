import { Injectable } from '@angular/core';
import { Books } from '../shared/books';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  booksRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  bookRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddBook(book: Books) {
    this.booksRef.push({
      name: book.name,
      description: book.description,
      view: book.view,
      quantity: book.quantity,
      price: book.price,
      rating: book.rating
    })
  }

  // Fetch Single Student Object
  GetBook(id: string) {
    this.bookRef = this.db.object('books-list/' + id);
    return this.bookRef;
  }

  // Fetch Students List
  GetBooksList() {
    this.booksRef = this.db.list('books-list',ref => ref.orderByChild('rating'));
    return this.booksRef;
  }  

  // Update Student Object
  UpdateBook(book: Books) {
    this.bookRef.update({
      name: book.name,
      description: book.description,
      view: book.view,
      quantity: book.quantity,
      price: book.price,
      rating: book.rating
      
    })
  }  

  // Delete Student Object
  DeleteBook(id: string) { 
    this.bookRef = this.db.object('books-list/'+id);
    this.bookRef.remove();
  }
  
}