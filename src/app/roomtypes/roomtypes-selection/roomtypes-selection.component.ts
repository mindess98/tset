import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomType } from '../../shared/index';

@Component({
	selector: 'app-roomtypes-selection',
	templateUrl: './roomtypes-selection.component.html',
	styleUrls: ['./roomtypes-selection.component.css']
})
export class RoomTypesSelection {
	_roomTypes: Array<RoomType>;

	@Input() set roomTypes(value: Array<RoomType>) {
		this._roomTypes = value;
		this.selected.emit(this._roomTypes[0]);
	}

	@Output() selected = new EventEmitter();
}