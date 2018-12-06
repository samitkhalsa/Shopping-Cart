import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';



// Include components for in which router service to be used
import { AddBookComponent } from './add-book/add-book.component';
import { BooksListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookListUserComponent } from './book-list-user/book-list-user.component';
import { BookListAuthUserComponent } from './book-list-auth-user/book-list-auth-user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   { path: '', component: BookListUserComponent },
  { path: 'register-book', component: AddBookComponent },
  { path: 'view-book', component: BooksListComponent },
  { path: 'view-book-user', component: BookListUserComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'view-book-user-auth', component: BookListAuthUserComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: LoginComponent},
   { path: 'checkout', component: CheckoutComponent}
  ];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
