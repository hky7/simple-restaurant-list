import {Component, OnInit, Output} from '@angular/core';
import { RestaurantStoreService } from '../store/restaurant-store.service';
import { sortAlphabetically, sortType } from '../utils/shared-utils';

@Component({
  selector: 'app-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedFilterType;
  restaurants;
  restaurantTypes;
  sortNameOrder = true;
  sortTypeOrder;
  previousFilter;
  constructor(private restaurantStore: RestaurantStoreService) { }

  ngOnInit() {
    this.restaurants = this.restaurantStore.restaurants.slice();
    this.restaurantTypes = this.restaurantStore.restaurantTypes.slice();
  }

  sortByAlphabetical() {
    this.restaurants = sortAlphabetically(this.restaurants, this.sortNameOrder);
    this.sortNameOrder = !this.sortNameOrder;
  }

  sortByType() {
    this.restaurants = sortType(this.restaurants, this.sortTypeOrder);
    this.sortTypeOrder = !this.sortTypeOrder;
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

  onButtonGroupClick(event) {
    const clickedElement = event.target || event.srcElement;

    if (clickedElement.nodeName === 'LABEL' ) {

      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
  }

}
