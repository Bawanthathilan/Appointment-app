import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import{
  MatTableModule,
} from '@angular/material/table';
 import{
  MatButtonModule,
 } from '@angular/material/button';

 import{
  MatToolbarModule,
 }from '@angular/material/toolbar';

 import{
  MatDatepickerModule,
 }from '@angular/material/datepicker';

 import{
  MatInputModule,
 }from '@angular/material/input';

 import{
  MatFormFieldModule,
 }from '@angular/material/form-field';

 import {
  MatProgressSpinnerModule,
 }from '@angular/material/progress-spinner';

 import {
  MatNativeDateModule,
 }from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
