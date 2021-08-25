import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';
import { AddEditAreaComponent } from './add-edit-area/add-edit-area.component';
import { DeleteAreaComponent } from './delete-area/delete-area.component';


@NgModule({
  declarations: [
    AreaComponent,
    AddEditAreaComponent,
    DeleteAreaComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    SharedModuleModule
  ]
})
export class AreaModule { }
