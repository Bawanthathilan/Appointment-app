import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg: string;
  public errorMsg : string;
  public appointmentDate :string;
  public name: string;
  public email: string;
  public message: string;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {

  }

  createAppointment(){
    this.successMsg="";
    this.errorMsg="";
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email , this.message)
    .subscribe((createAppointment: Appointment)=>{
      this.appointmentDate = "";
      this.name="";
      this.email="";
      this.message="";
      const appointmentDate = new Date(createAppointment.appointmentDate).toDateString();
      this.successMsg = `Appointment Booked sucessfully for ${appointmentDate}`;

    },
    (error: ErrorEvent)=>{
      this.errorMsg = error.error.message;
    })
  }

}
