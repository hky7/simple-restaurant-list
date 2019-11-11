import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../models/restaurant';
import {RestaurantStoreService} from '../store/restaurant-store.service';


@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant: Restaurant;
  restaurantTypes;
  type;
  constructor(private restaurantStore: RestaurantStoreService) { }

  ngOnInit() {
    this.restaurantTypes = this.restaurantStore.restaurantTypes.slice();
    this.type = this.restaurantTypes.find((type) => type.type === this.restaurant.type);
  }
}
