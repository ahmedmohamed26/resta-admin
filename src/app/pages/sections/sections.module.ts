import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';
import { AddEditSectionComponent } from './add-edit-section/add-edit-section.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';


@NgModule({
  declarations: [
    SectionsComponent,
    AddEditSectionComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModuleModule
  ]
})
export class SectionsModule { }
