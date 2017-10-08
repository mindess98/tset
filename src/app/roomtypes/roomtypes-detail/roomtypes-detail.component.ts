import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomType } from '../../shared/index';

@Component({
	selector: 'app-roomtypes-detail',
	templateUrl: './roomtypes-detail.component.html',
	styleUrls: ['./roomtypes-detail.component.css']
})
export class RoomTypesDetail {
	@Input() highlightedRoomType: RoomType;

	@Output() deleted = new EventEmitter();
	@Output() saved = new EventEmitter();
	@Output() canceled = new EventEmitter();
}