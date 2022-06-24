import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agGrid - RSK Helpline';
  sideBarOpen = true

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
