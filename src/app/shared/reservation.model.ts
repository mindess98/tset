export class Reservation {
	id: number;
	guestId: number;
	roomIds: Array<number>;
	from: Date;
	to: Date;
}