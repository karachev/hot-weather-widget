import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IHotel } from '../../hotels';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {
  @Input('hotel') hotel: IHotel;
  @Input('selectedHotel') selectedHotel: string;
  @Input('index') index: number;
  @Output('hotelSelected') hotelSelected = new EventEmitter();

  ngOnInit() {
    if (this.index === 0) {
      // TODO необходим рефакторинг
      setTimeout(() => this.hotelSelected.emit(this.hotel.address));
    }
  }

  public hotelItemClicked($event): void {
    this.hotelSelected.emit(this.hotel.address);
    $event.preventDefault();
  }
}
