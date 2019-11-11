import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    ListComponent,
    TableComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
