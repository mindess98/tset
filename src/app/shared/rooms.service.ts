import { Injectable } from '@angular/core';
import { Room } from './room.model';

@Injectable()
export class RoomsService {
	rooms: Array<Room>;

	constructor() { 
		this.rooms = [
			{
				id: 1,
				name: 'suite',
				roomTypeId: 1,
				reservationIds: [ 2, 3],
				picture: [3, 4, 5]
			},
			{
				id: 2,
				name: 'suite',
				roomTypeId: 1,
				reservationIds: [ 2, 3],
				picture: [3, 4, 5]
			},
			{
				id: 3,
				name: 'suite',
				roomTypeId: 1,
				reservationIds: [ 2, 3],
				picture: [3, 4, 5]
			},
			{
				id: 4,
				name: 'suite',
				roomTypeId: 1,
				reservationIds: [ 2, 3],
				picture: [3, 4, 5]
			},
			{
				id: 5,
				name: 'suite',
				roomTypeId: 1,
				reservationIds: [ 2, 3],
				picture: [3, 4, 5]
			},
			{
				id: 6,
				name: 'suite',
				roomTypeId: 1,
				reservationIds: [ 2, 3],
				picture: [3, 4, 5]
			}
		];
	}

	getAll() {
		return this.rooms;
	}

}
