import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { restaurants, restaurantTypes } from '../../assets/data';
import {BehaviorSubject} from 'rxjs';
import {RestaurantType} from '../models/restaurant-type';

@Injectable({
  providedIn: 'root'
})
// Mock restaurant service, feeding in data.js instead of retrieving data via api call
export class RestaurantStoreService {
  private readonly RESTAURANTS = new BehaviorSubject<Restaurant[]>(restaurants);
  private readonly RESTAURANT_TYPES = new BehaviorSubject<RestaurantType[]>(restaurantTypes);

  constructor() { }

  get restaurants(): Restaurant[] {
    return this.RESTAURANTS.getValue();
  }

  get restaurantTypes(): RestaurantType[] {
    return this.RESTAURANT_TYPES.getValue();
  }
}
