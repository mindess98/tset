import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../shared/index';

@Component({
  selector: 'app-rooms-detail',
  templateUrl: './rooms-detail.component.html',
  styleUrls: ['./rooms-detail.component.css']
})
export class RoomsDetailComponent {
	@Input() selectedRoom: Room;

}
