import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Booking } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';
import { BookingResumeComponent } from "../../booking/booking-resume/booking-resume.component";

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, BookingResumeComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookingList: Booking[] = [];


  constructor(private bookingService: BookingService){

  }

  ngOnInit(): void {
    this.bookingList = this.bookingService.getAllBookings();
  }

}
