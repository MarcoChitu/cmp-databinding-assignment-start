import { Component, OnInit,EventEmitter,Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intercalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intercalFired.emit(this.lastNumber + 1);
      this.lastNumber++
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
