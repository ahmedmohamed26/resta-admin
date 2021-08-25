import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-area',
  templateUrl: './delete-area.component.html',
  styleUrls: ['./delete-area.component.scss']
})
export class DeleteAreaComponent implements OnInit {
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public areaPopup: MatDialogRef<DeleteAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  closePopup() {
    this.areaPopup.close();
  }


}
