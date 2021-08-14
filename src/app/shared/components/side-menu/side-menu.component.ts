import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  routerList = [
    { name: 'dashboard', path: 'dashboard', icon: 'space_dashboard' },
    { name: 'admins', path: 'admins', icon: 'account_circle' },
    { name: 'categories', path: 'categories', icon: 'category' },
    { name: 'places', path: 'places', icon: 'storefront' },
    { name: 'contract', path: 'contract', icon: 'feed' },
    { name: 'banners', path: 'banners', icon: 'crop_original' },
    { name: 'ads', path: 'ads', icon: 'crop_original' },
    { name: 'sections', path: 'sections', icon: 'grid_view' },
    { name: 'city', path: 'city', icon: 'location_city' },
    { name: 'area', path: 'area', icon: 'location_city' },
    { name: 'notifications', path: 'notifications', icon: 'notifications' },

    { name: 'settings', path: 'settings', icon: 'settings' },
  ];
  constructor() {}
}
