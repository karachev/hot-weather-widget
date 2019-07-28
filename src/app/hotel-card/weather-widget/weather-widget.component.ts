import { Component, Input } from '@angular/core';
import { IHotel } from '../../hotels';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {
  @Input() hotel: IHotel;
}
