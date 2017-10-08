import { Component, OnInit } from '@angular/core';
import { Guest, GuestsService } from '../shared/index';


@Component({
	selector: 'app-guests',
	templateUrl: './guests.component.html',
	styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit{
	guests: Array<Guest>;
	selectedGuest: Guest;

	constructor(
		private guestsService: GuestsService
		) {}

	ngOnInit() {
		this.guests = this.guestsService.getAll();	
	}

	selectGuest(guest: Guest) {
		this.selectedGuest = guest;
	}
	cancelUpdate(guest: Guest) {
		guest = Object.assign({}, this.selectedGuest);
	}
}