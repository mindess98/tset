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
	addedRooms: Array<Room>;

  	constructor(
  		private roomsService: RoomsService
  		) { 
  		this.addedRooms = [];
  	}

  	ngOnInit() {
  		this.rooms = this.roomsService.getAll();
	}

	selectRoom(room: Room) {
		this.selectedRoom = room;
	}

	addRoom(room: Room) {
		var index = this.rooms.indexOf(room);
		this.rooms.splice(index, 1);
		this.addedRooms.push(room);
		console.log(this.addedRooms);
	}
}
