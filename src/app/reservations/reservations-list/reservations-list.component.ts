import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reservation } from '../../shared/index';

@Component({
	selector: 'app-reservations-list',
	templateUrl: './reservations-list.component.html',
	styleUrls: ['./reservations-list.component.css']
})
export class ReservationsList {
	@Input() reservations: Array<Reservation>;

	@Output() selected = new EventEmitter();
}