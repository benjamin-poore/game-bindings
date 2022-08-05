import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  seconds = 0;
  interval: number;

  @Output()
  gameStarted = new EventEmitter<number>();

  onGameStart() {
    this.interval = setInterval(() => this.gameStarted.emit(++this.seconds), 1000);
  }
  onGameEnd() {
    clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
