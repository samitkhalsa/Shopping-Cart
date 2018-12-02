import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoesDetailComponent } from './shoes-detail/shoes-detail.component';
import { ShoesCreateComponent } from './shoes-create/shoes-create.component';
import { ShoesEditComponent } from './shoes-edit/shoes-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'shoes',
    component: ShoesComponent,
    data: { title: 'Shoes List' }
  },
  {
    path: 'shoes-details/:id',
    component: ShoesDetailComponent,
    data: { title: 'Shoes Details' }
  },
  {
    path: 'shoes-create',
    component: ShoesCreateComponent,
    data: { title: 'Create Shoes' }
  },
  {
    path: 'shoes-edit/:id',
    component: ShoesEditComponent,
    data: { title: 'Edit Shoes' }
  },
  { path: '',
    redirectTo: '/shoes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    ShoesDetailComponent,
    ShoesCreateComponent,
    ShoesEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
