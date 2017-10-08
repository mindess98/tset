import { RoomType } from './roomtype.model';
import { Injectable } from '@angular/core';


@Injectable()
export class RoomTypesService {
	_roomTypes: Array<RoomType>;

	constructor() {
		this._roomTypes = [
			{ 
				'id': 1,
			  	'name': 'Deluxe',
			  	'starValue': 5
			},
			{ 
				'id': 2,
			  	'name': 'Elegant',
			  	'starValue': 4
			},
			{ 
				'id': 3,
			  	'name': 'Economy',
			  	'starValue': 3
			}
		];
	}

	getAll() {
		return this._roomTypes;
	}
}