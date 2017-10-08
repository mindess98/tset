import { Injectable } from '@angular/core';
import { Guest } from './guest.model';

@Injectable()
export class GuestsService {
	_guests: Array<Guest>;

	constructor() {
		this._guests = [
			{
				id: 1,
				name: 'name',
				reservationId: 3
			},
			{
				id: 2,
				name: 'ame',
				reservationId: 1
			},
			{
				id: 3,
				name: 'me',
				reservationId: 2
			},
			{
				id: 4,
				name: 'e',
				reservationId: 4
			},
		];
	}

	getAll() {
		return this._guests;
	}
}