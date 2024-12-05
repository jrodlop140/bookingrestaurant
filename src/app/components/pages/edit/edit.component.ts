import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { BookingFormComponent } from "../../booking/booking-form/booking-form.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, BookingFormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
