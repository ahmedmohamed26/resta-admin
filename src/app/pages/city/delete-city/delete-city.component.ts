import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-city',
  templateUrl: './delete-city.component.html',
  styleUrls: ['./delete-city.component.scss']
})
export class DeleteCityComponent implements OnInit {
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public cityPopup: MatDialogRef<DeleteCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  closePopup() {
    this.cityPopup.close();
  }

}
