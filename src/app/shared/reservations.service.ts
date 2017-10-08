import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';

@Injectable()
export class ReservationsService {
	reservations: Array<Reservation>;

	constructor() {
		this.reservations = [
			{
				id: 1,
				guestId: 1,
				roomIds: [1, 3],
				from: new Date(2010, 10, 10),
				to: new Date(2010, 10, 11)
			},
			{
				id: 2,
				guestId: 2,
				roomIds: [2, 4],
				from: new Date(2010, 10, 10),
				to: new Date(2010, 10, 11)
			},
			{
				id: 3,
				guestId: 3,
				roomIds: [5],
				from: new Date(2010, 10, 10),
				to: new Date(2010, 10, 11)
			},
			{
				id: 4,
				guestId: 4,
				roomIds: [6],
				from: new Date(2010, 10, 10),
				to: new Date(2010, 10, 11)
			},
		];
	}

	getAll() {
		return this.reservations;
	}
}