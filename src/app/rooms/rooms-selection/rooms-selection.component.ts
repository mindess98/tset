import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../shared/index';

@Component({
  selector: 'app-rooms-selection',
  templateUrl: './rooms-selection.component.html',
  styleUrls: ['./rooms-selection.component.css']
})
export class RoomsSelectionComponent {

	@Input() rooms: Array<Room>;

	@Output() add = new EventEmitter();
}
