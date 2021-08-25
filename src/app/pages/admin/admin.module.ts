import { SharedModuleModule } from './../../shared/modules/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddEditAdminComponent,
    DeleteAdminComponent
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
