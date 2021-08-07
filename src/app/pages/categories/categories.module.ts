import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddEditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModuleModule
  ],
  exports: [
    AddEditCategoryComponent
  ]
})
export class CategoriesModule { }
