import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {
  public bookForm: FormGroup;  // Define FormGroup to student's form
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

 
  ngOnInit() {
    this.crudApi.GetBooksList();  // Call GetStudentsList() before main form is being called
    this.booForm();              // Call student form when component is ready
  }

  // Reactive student form
  booForm() {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      view: [''],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      rating: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })  
  }

  // Accessing form control using getters
  get name() {
    return this.bookForm.get('name');
  }

  get description() {
    return this.bookForm.get('description');
  }  

  get view() {
    return this.bookForm.get('view');
  }

  get quantity() {
    return this.bookForm.get('quantity');
  }
  
  get price() {
    return this.bookForm.get('price');
  }
  get rating() {
    return this.bookForm.get('rating');
  }

  // Reset student form's values
  ResetForm() {
    this.bookForm.reset();
  }  
 
  submitBookData() {
    this.crudApi.AddBook(this.bookForm.value); // Submit student data using CRUD API
    this.toastr.success(this.bookForm.controls['name'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}