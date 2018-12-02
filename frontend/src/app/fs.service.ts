import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FsService {
  ref = firebase.firestore().collection('shoes');
  constructor() { }
  
  getShoes(): Observable<any> {
  return new Observable((observer) => {
    this.ref.onSnapshot((querySnapshot) => {
      let shoes = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        shoes.push({
          key: doc.id,
          name: data.name,
          description: data.description,
          quantity: data.quantity,
          visibility: data.visibility
        });
      });
      observer.next(shoes);
    });
  });
}

getShoes(id: string): Observable<any> {
  return new Observable((observer) => {
    this.ref.doc(id).get().then((doc) => {
      let data = doc.data();
      observer.next({
          key: doc.id,
          name: data.name,
          description: data.description,
          quantity: data.quantity,
          visibility: data.visibility
      });
    });
  });
}

postShoes(data): Observable<any> {
  return new Observable((observer) => {
    this.ref.add(data).then((doc) => {
      observer.next({
        key: doc.id,
      });
    });
  });
}

updateShoes(id: string, data): Observable<any> {
  return new Observable((observer) => {
    this.ref.doc(id).set(data).then(() => {
      observer.next();
    });
  });
}

deleteShoes(id: string): Observable<{}> {
  return new Observable((observer) => {
    this.ref.doc(id).delete().then(() => {
      observer.next();
    });
  });
}
}
