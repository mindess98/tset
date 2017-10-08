import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Guest } from '../../shared/index';

@Component({
	selector: 'app-guests-detail',
	templateUrl: './guests-detail.component.html',
	styleUrls: ['./guests-detail.component.css']
})
export class GuestsDetail {
	selectedGuest: Guest;
	@Input() set SelectedGuest(value) {
		this.selectedGuest = Object.assign({}, value);
	}

	@Output() saved = new EventEmitter();
	@Output() deleted = new EventEmitter();
	@Output() canceled = new EventEmitter();
	@Output() create = new EventEmitter();
}