import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-type',
  templateUrl: './hotel-type.component.html',
  styleUrls: ['./hotel-type.component.scss']
})
export class HotelTypeComponent {
  @Input('activeType') activeType: string;
  @Input('type') type: string;

  @Output('typeChange') typeChange = new EventEmitter();

  public activeTypeChange($event): void {
    this.typeChange.emit(this.activeType);
    $event.preventDefault();
  }
}
