import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../shared/index';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {

	@Input() rooms: Array<Room>;

	@Output() selected = new EventEmitter;

}
