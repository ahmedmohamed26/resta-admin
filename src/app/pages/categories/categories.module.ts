import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddEditCategoryComponent,
    DeleteCategoryComponent
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
