import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModuleModule
  ]
})
export class SettingModule { }
