import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds: number[] = [];

  onSecondsAdded(second: number) {
    this.seconds.push(second);
  }
}
