import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoomTypesService, GuestsService } from './shared/index';
import { ReservationsService } from './shared/reservations.service';

import { AppComponent } from './app.component';

import { RoomTypesComponent } from './roomtypes/roomtypes.component';
import { RoomTypesSelection } from './roomtypes/roomtypes-selection/roomtypes-selection.component';
import { RoomTypesList } from './roomtypes/roomtypes-list/roomtypes-list.component';
import { RoomTypesDetail } from './roomtypes/roomtypes-detail/roomtypes-detail.component';

import { GuestsComponent } from './guests/guests.component';
import { GuestsList } from './guests/guests-list/guests-list.component';
import { GuestsDetail } from './guests/guests-detail/guests-detail.component';

import { ReservationsComponent } from './reservations/reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomTypesComponent,
    RoomTypesSelection,
    RoomTypesList,
    RoomTypesDetail,
    GuestsComponent,
    GuestsList,
    GuestsDetail,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RoomTypesService, GuestsService, ReservationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
