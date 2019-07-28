import { Component, OnInit } from '@angular/core';
import { IHotel, hotels$, hotelType } from '../hotels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  public hotels$: Observable<IHotel[]> = hotels$;
  public hotel: IHotel;
  public readonly hotelTypes: typeof hotelType = hotelType;
  public activeHotelType: string;
  public selectedHotel: string;

  ngOnInit() {
    this.hotels$.subscribe();
    this.activeHotelType = this.hotelTypes[0];
  }

  public onTypeChange(type: string): void {
    this.activeHotelType = type;
  }

  public onHotelSelected(hotel: IHotel): void {
    this.hotel = hotel;
    this.selectedHotel = hotel.address;
  }

}
