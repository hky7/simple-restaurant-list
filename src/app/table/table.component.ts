import {Component, Input, OnInit} from '@angular/core';
import { RestaurantStoreService } from '../store/restaurant-store.service';
import { Restaurant } from '../models/restaurant';
import { sortAlphabetically, sortType } from '../utils/shared-utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() restaurant: Restaurant;
  restaurants;
  restaurantTypes;
  sortNameOrder = null;
  sortTypeOrder = null;
  previousFilter;
  selectedFilterType;
  constructor(private restaurantStore: RestaurantStoreService) { }

  ngOnInit() {
    this.restaurants = this.restaurantStore.restaurants.slice();
    this.restaurantTypes = this.restaurantStore.restaurantTypes.slice();
  }

  getColor(restaurant) {
    return this.restaurantTypes.find((type) => type.type === restaurant.type).color;
  }

  getType(type) {
    this.selectedFilterType = type;
    this.filterType(this.selectedFilterType);
  }

  filterType(value) {
    if (this.previousFilter === value) {
      this.restaurants = this.restaurantStore.restaurants.slice();
      this.previousFilter = null;
    } else {
      this.restaurants = this.restaurantStore.restaurants.filter((type) => type.type === value);
      this.previousFilter = value;
    }
  }

  sortByAlphabetical() {
    this.restaurants = sortAlphabetically(this.restaurants, this.sortNameOrder);
    this.sortNameOrder = !this.sortNameOrder;
  }

  sortByType() {
    this.restaurants = sortType(this.restaurants, this.sortTypeOrder);
    this.sortTypeOrder = !this.sortTypeOrder;
  }

}
