import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {

  seats: any[][];
  selectedSeats: number[];
numSeats: any;

  constructor() {
    this.seats = this.generateSeats();
    this.selectedSeats = [];
   }

   generateSeats(): any[][] {
    const seats = [];
    const rows = Math.floor(80 / 7);
    const lastRowSeats = 80 % 7;

    for (let i = 0; i < rows; i++) {
      seats.push(Array(7).fill(false));
    }

    seats.push(Array(lastRowSeats).fill(false));

    return seats;
  }

  reserveSeats(numSeats: number): void {
    const seatsAvailable: number[] = [];
    for (let i = 0; i < this.seats.length; i++) {
      const row = this.seats[i];
      let availableSeats = 0;
      let startIndex = -1;

      for (let j = 0; j < row.length; j++) {
        if (!row[j]) {
          if (startIndex === -1) {
            startIndex = j;
          }
          availableSeats++;
        } else {
          availableSeats = 0;
          startIndex = -1;
        }

        if (availableSeats === numSeats) {
          for (let k = startIndex; k <= j; k++) {
            this.seats[i][k] = true;
            this.selectedSeats.push(i * 7 + k);
          }
          return;
        }
      }

      if (availableSeats >= numSeats) {
        for (let k = startIndex; k < startIndex + numSeats; k++) {
          this.seats[i][k] = true;
          this.selectedSeats.push(i * 7 + k);
        }
        return;
      } else {
        seatsAvailable.push(i + 1);
      }
    }

    alert(`Sorry, ${numSeats} seats not available. Available rows: ${seatsAvailable.join(", ")}`);
  }


  ngOnInit(): void {
  }

}
