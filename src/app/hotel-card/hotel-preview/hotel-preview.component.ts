import { Component, Input } from '@angular/core';
import { IHotel } from '../../hotels';

@Component({
  selector: 'app-hotel-preview',
  templateUrl: './hotel-preview.component.html',
  styleUrls: ['./hotel-preview.component.scss']
})
export class HotelPreviewComponent {
  @Input() hotel: IHotel;
}
