import { Component, OnInit } from '@angular/core';
import { RoomsService, Room } from '../shared/index';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
	rooms: Array<Room>;
	selectedRoom: Room;

  	constructor(
  		private roomsService: RoomsService
  		) { }

  	ngOnInit() {
  		this.rooms = this.roomsService.getAll();
	}

	selectRoom(room: Room) {
		this.selectedRoom = room;
	}

	addRoom(room: Room) {
		console.log(room);
	}
}
