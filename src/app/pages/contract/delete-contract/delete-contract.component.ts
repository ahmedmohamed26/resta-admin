import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrls: ['./delete-contract.component.scss']
})
export class DeleteContractComponent implements OnInit {

  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public contractPopup: MatDialogRef<DeleteContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
  }





  closePopup() {
    this.contractPopup.close();
  }
}
