import { Component, Input, SimpleChanges } from '@angular/core';
import { Booking } from '../../../models/booking.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  formBooking: FormGroup;

  @Input()
  bookingEdit: Booking | null = null;

  constructor(private route: ActivatedRoute, private routerService: Router, private bookingService: BookingService, formBuilder: FormBuilder) {
    this.formBooking = formBuilder.group({
      'nombre': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      'telefono': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookingEdit'].currentValue) {
      const booking = changes['BookingEdit'].currentValue as Booking;
      this.formBooking.patchValue({
        client: booking.client,
        phone: booking.phone,
        email: booking.email,
        persons: booking.persons,
        notes: booking.notes,
        date: booking.date,
        dateCreation: booking.dateCreation,
        status: booking.status
      })
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.bookingEdit = this.bookingService.getBookingById(id);


      if (this.bookingEdit) {
        this.formBooking.patchValue({
          client: this.bookingEdit.client,
          phone: this.bookingEdit.phone,
          email: this.bookingEdit.email,
          persons: this.bookingEdit.persons,
          notes: this.bookingEdit.notes,
          date: this.bookingEdit.date,
          dateCreation: this.bookingEdit.dateCreation,
          status: this.bookingEdit.status
        });
      }


    });

  }

  onSubmit() {
    if (this.formBooking.valid) {
      let bookingForm = this.formBooking.value;

      if (this.bookingEdit) {
        let booking: Booking = new Booking(
          this.bookingEdit.id,
          bookingForm
            .client,
          bookingForm
            .phone,
          bookingForm.email,
          bookingForm.persons,
          bookingForm.notes,
          bookingForm.date,
          bookingForm.dateCreation,
          bookingForm.status
        )

        this.bookingService.addBooking(booking)
      } else {
        let booking: Booking = new Booking(
          0,
          bookingForm
            .client,
          bookingForm
            .phone,
          bookingForm.email,
          bookingForm.persons,
          bookingForm.notes,
          bookingForm.date,
          bookingForm.dateCreation,
          bookingForm.status
        )

        this.bookingService.addBooking(booking)
      }
      this.routerService.navigate(['/bookings'])
    }
  }
}
