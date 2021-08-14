import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'admins',
        loadChildren: () =>
          import('./pages/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'places',
        loadChildren: () =>
          import('./pages/places/places.module').then((m) => m.PlacesModule),
      },
      {
        path: 'contract',
        loadChildren: () =>
          import('./pages/contract/contract.module').then((m) => m.ContractModule),
      },
      {
        path: 'banners',
        loadChildren: () =>
          import('./pages/banners/banners.module').then((m) => m.BannersModule),
      },
      {
        path: 'ads',
        loadChildren: () =>
          import('./pages/ads/ads.module').then((m) => m.AdsModule),
      },
      {
        path: 'sections',
        loadChildren: () =>
          import('./pages/sections/sections.module').then((m) => m.SectionsModule),
      },
      {
        path: 'city',
        loadChildren: () =>
          import('./pages/city/city.module').then((m) => m.CityModule),
      },
      {
        path: 'area',
        loadChildren: () =>
          import('./pages/area/area.module').then((m) => m.AreaModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./pages/notifications/notifications.module').then((m) => m.NotificationsModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/setting/setting.module').then((m) => m.SettingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
