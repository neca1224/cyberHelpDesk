import { Component, OnInit, enableProdMode } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MENU } from './app.constans';

@Component({
  selector: 'chd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cyberHelpDesk';
  // items = MENU;
  items!: any;
  num: number = 0;
  num2: number = 0;
  ngOnInit(): void {
    this.items = this.enableMenu(MENU, 'develop');
    console.log(this.items);
  }

  enableMenu(menu: any, role: string) {

    return menu.map((menu: any) => {
      
      if (menu.enableRoles && menu.enableRoles.length > 0) {
        menu.disable = !menu.enableRoles.includes(role)

        
      }

      if (menu.items) {
        menu.items = this.enableMenu(menu.items, role);           
      }  

      return menu;  
    })
  }
}
