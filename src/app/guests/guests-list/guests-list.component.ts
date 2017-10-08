import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Guest } from '../../shared/index';

@Component({
	selector: 'app-guests-list',
	templateUrl: './guests-list.component.html',
	styleUrls: ['./guests-list.component.css']
})
export class GuestsList {
	@Input() _guests: Array<Guest>;

	@Output() selected = new EventEmitter();
}