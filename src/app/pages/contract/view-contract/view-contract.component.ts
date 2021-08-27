import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss'],
})
export class ViewContractComponent implements OnInit {
  contract:any = {};
  constructor(
    public dialog: MatDialog,
    public viewContractPopup: MatDialogRef<ViewContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.contract = this.data.contract;
  }

  closePopup() {
    this.viewContractPopup.close();
  }
}
