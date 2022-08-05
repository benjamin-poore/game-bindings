import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onSecondsAdded(second: number) {
    if (second % 2 === 0) {
      this.evens.push(second);
    } else {
      this.odds.push(second);
    }
  }
}
