import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';
import { AddEditCityComponent } from './add-edit-city/add-edit-city.component';
import { DeleteCityComponent } from './delete-city/delete-city.component';


@NgModule({
  declarations: [
    CityComponent,
    AddEditCityComponent,
    DeleteCityComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    SharedModuleModule
  ]
})
export class CityModule { }
