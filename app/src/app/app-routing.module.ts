import { Host, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'appointment-list',
    component:AppointmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
