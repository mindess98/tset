import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoomTypesService, GuestsService, RoomsService } from './shared/index';
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
import { ReservationsList } from './reservations/reservations-list/reservations-list.component';

import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsDetailComponent } from './rooms/rooms-detail/rooms-detail.component';
import { RoomsSelectionComponent } from './rooms/rooms-selection/rooms-selection.component';

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
    ReservationsComponent,
    ReservationsList,
    RoomsComponent,
    RoomsListComponent,
    RoomsDetailComponent,
    RoomsSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RoomTypesService, GuestsService, ReservationsService, RoomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
