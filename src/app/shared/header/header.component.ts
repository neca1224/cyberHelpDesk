import { Component, OnInit } from '@angular/core';
import { SideMenuOption } from "../interfaces/menu.interfece";
import { MENU } from "../../app.constans";

@Component({
  selector: 'chd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  items!: SideMenuOption[];
  roles: string[] = ['user', 'develop']

  constructor() {
  }

  ngOnInit(): void {
    this.items = this.enableRole(MENU, this.roles);
  }

  enableRole(menu: SideMenuOption[], roles: string[]) {

    let initialMenu: SideMenuOption[] = [];

    return menu.reduce((accumulatorMenu: SideMenuOption[], current: SideMenuOption) => {
      const rolRex = new RegExp(roles.join('|'));
      let rolAdmit = false;

      if (current.enableRoles) {
        rolAdmit = rolRex.test(current.enableRoles.join())
      }

      if (accumulatorMenu.length && accumulatorMenu[accumulatorMenu.length - 1].separator && current.separator) {

        return accumulatorMenu;
      }
      if (current.items) {
        current.items = this.enableRole(current.items, roles);
      }

      if (!rolAdmit) {

        return accumulatorMenu;
      }

      return [...accumulatorMenu, current];
    }, initialMenu)
  }

}
