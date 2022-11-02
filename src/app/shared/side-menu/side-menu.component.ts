import { Component, Input, OnInit } from '@angular/core';
import { SideMenuOption } from '../interfaces/menu.interfece';

@Component({
  selector: 'chd-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  // @Input SideMenuOptios[]:SideMenuOption;

  constructor() { }

  ngOnInit(): void {
  }

}
