import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  routerList = [
    { name: 'dashboard', path: 'dashboard',icon:'space_dashboard' },
    { name: 'admins', path: "admins",icon:'account_circle' },
    { name: 'categories', path: 'categories', icon: 'category' },
    { name: 'places', path: 'places', icon: 'storefront' },
    { name: 'settings',  path: 'settings',icon:'settings' },
  ];
  constructor() { }

}
