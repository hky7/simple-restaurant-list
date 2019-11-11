import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {RestaurantStoreService} from '../store/restaurant-store.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() getType = new EventEmitter<string>();
  restaurantTypes;
  constructor(private restaurantStore: RestaurantStoreService) { }

  ngOnInit() {
    this.restaurantTypes = this.restaurantStore.restaurantTypes.slice();
  }

  filterType(value) {
    this.getType.emit(value.type);
  }
}
