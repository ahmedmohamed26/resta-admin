import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditContractComponent } from './add-edit-contract/add-edit-contract.component';
import { DeleteContractComponent } from './delete-contract/delete-contract.component';
import { ViewContractComponent } from './view-contract/view-contract.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  loadingSpinner: boolean;
  search: string;
  contracts = [
    {
      "id": 1,
      "email": "ahmed.m.moneem@gmail.com",
      "nameOwner": "ahmed",
      "nameManager": "mohamed",
      "phoneOwner": "01124269532",
      "phoneManager": "01124269532",
      "dateVisit": "20/8/2020",
      "dateFromContract": "20/8/2020",
      "dateToContract":"20/8/2020",
      "isActive": true,
    },
    {
      "id": 1,
      "email": "ahmed.m.moneem@gmail.com",
      "nameOwner": "ahmed",
      "nameManager": "mohamed",
      "phoneOwner": "01124269532",
      "phoneManager": "01124269532",
      "dateVisit": "20/8/2020",
      "dateFromContract": "20/8/2020",
      "dateToContract":"20/8/2020",
      "isActive": true,
    },
    {
      "id": 1,
      "email": "ahmed.m.moneem@gmail.com",
      "nameOwner": "ahmed",
      "nameManager": "mohamed",
      "phoneOwner": "01124269532",
      "phoneManager": "01124269532",
      "dateVisit": "20/8/2020",
      "dateFromContract": "20/8/2020",
      "dateToContract":"20/8/2020",
      "isActive": true,
    },
 
  ]
  constructor(public dialog: MatDialog) {
    this.loadingSpinner = true;
    this.search = '';
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingSpinner = false;
    }, 1500);
  }


  
  viewContractPopup(contract?: any): void {
    const dialogRef = this.dialog.open(ViewContractComponent, {
      panelClass: "contract-dialog-responsive",
      data: {contract:contract},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

  openPopup(contract?: any): void {
    const dialogRef = this.dialog.open(AddEditContractComponent, {
      panelClass: "contract-dialog-responsive",
      data: {contract:contract},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

  deletePopup(contract?: any): void {
    const dialogRef = this.dialog.open(DeleteContractComponent, {
      panelClass: "contract-dialog-responsive",
      data: {contract:contract},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }


}
