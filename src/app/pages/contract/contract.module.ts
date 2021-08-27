import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module.module';
import { AddEditContractComponent } from './add-edit-contract/add-edit-contract.component';
import { DeleteContractComponent } from './delete-contract/delete-contract.component';
import { ViewContractComponent } from './view-contract/view-contract.component';


@NgModule({
  declarations: [
    ContractComponent,
    AddEditContractComponent,
    DeleteContractComponent,
    ViewContractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModuleModule
  ]
})
export class ContractModule { }
