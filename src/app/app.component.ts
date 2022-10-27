import { Component } from '@angular/core';
import { MENU } from './app.constans';

@Component({
  selector: 'chd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyberHelpDesk';
  
  items = MENU;
}
