import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './hotel-card/weather-widget/weather-widget.component';
import { HotelPreviewComponent } from './hotel-card/hotel-preview/hotel-preview.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelFilterPipe } from './shared/pipes/hotel-filter.pipe';
import { EnumToArrayPipe } from './shared/pipes/enum-to-array.pipe';
import { HotelTypeComponent } from './hotel-card/hotel-type/hotel-type.component';
import { HotelItemComponent } from './hotel-card/hotel-item/hotel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HotelPreviewComponent,
    HotelCardComponent,
    HotelFilterPipe,
    HotelTypeComponent,
    EnumToArrayPipe,
    HotelItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
