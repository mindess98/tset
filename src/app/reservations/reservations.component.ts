import { Component, OnInit } from '@angular/core';
import { Reservation } from '../shared/reservation.model';
import { ReservationsService } from '../shared/reservations.service';

@Component({
	selector: 'app-reservations',
	templateUrl: './reservations.component.html',
	styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
	reservations: Array<Reservation>;

	constructor(
		private reservationsService: ReservationsService
		) {}
	
	ngOnInit() {
		this.reservations = this.reservationsService.getAll();
	}

}