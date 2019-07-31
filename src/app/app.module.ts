import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelPreviewComponent } from './hotel-card/hotel-preview/hotel-preview.component';
import { WeatherComponent } from './hotel-card/weather/weather.component';
import { HotelTypeComponent } from './hotel-card/hotel-type/hotel-type.component';
import { HotelItemComponent } from './hotel-card/hotel-item/hotel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelPreviewComponent,
    WeatherComponent,
    HotelTypeComponent,
    HotelItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
