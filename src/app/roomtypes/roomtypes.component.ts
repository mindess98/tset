import { Component, OnInit } from '@angular/core';
import { RoomTypesService, RoomType } from '../shared/index';

@Component({
	selector: 'app-roomtypes',
	templateUrl: './roomtypes.component.html',
	styleUrls: [ './roomtypes.component.css' ]
})
export class RoomTypesComponent implements OnInit {
	roomTypes: Array<RoomType>;
	selectedRoomType: RoomType;
	highlightedRoomType: RoomType;

	constructor(
		private roomTypesService: RoomTypesService
		) {}

	ngOnInit() {
		this.roomTypes = this.roomTypesService.getAll();
	}

	yell(roomType: RoomType) {
		this.selectedRoomType = Object.assign({}, roomType);
	}
	lley(roomType: RoomType) {
		this.highlightedRoomType = Object.assign({}, roomType);
	}
}