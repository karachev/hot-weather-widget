import { Pipe, PipeTransform } from '@angular/core';
import { IHotel, hotelType } from '../../hotels';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(hotels: IHotel[], filteredType: hotelType): IHotel[] {
    return hotels.filter(hotel => hotel.type === filteredType);
  }

}
