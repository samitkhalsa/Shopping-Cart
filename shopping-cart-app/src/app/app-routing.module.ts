import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';



// Include components for in which router service to be used
import { AddBookComponent } from './add-book/add-book.component';
import { BooksListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
   { path: '', redirectTo: '/register-book', pathMatch: 'full' },
  { path: 'register-book', component: AddBookComponent },
  { path: 'view-book', component: BooksListComponent },
  { path: 'edit-book/:id', component: EditBookComponent }
  ];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
