import { SharedModuleModule } from './../../shared/modules/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddEditAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModuleModule
  ],
  exports: [
    AddEditAdminComponent
  ]
})
export class AdminModule { }
