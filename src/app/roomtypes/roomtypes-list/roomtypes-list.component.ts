import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomType } from '../../shared/index';

@Component({
	selector: 'app-roomtypes-list',
	templateUrl: './roomtypes-list.component.html',
	styleUrls: ['./roomtypes-list.component.css']
})
export class RoomTypesList {
	@Input() roomTypes: Array<RoomType>;

	@Output() highlighted = new EventEmitter();
}