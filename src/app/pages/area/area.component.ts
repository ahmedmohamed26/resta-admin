import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAreaComponent } from './add-edit-area/add-edit-area.component';
import { DeleteAreaComponent } from './delete-area/delete-area.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  loadingSpinner: boolean;
  search: string;
  areas = [
    {
      "id": 1,
      "city": "القاهرة",
      "areaName": "المعادى",
      "isActive": true,
    },
    {
      "id": 2,
      "city": "الجيزة",
      "areaName": "الزمالك",
      "isActive": false,
    },
    {
      "id": 3,
      "city": "الأسكندرية",
      "areaName": "ابو قير",
      "isActive": true,
    },
    {
      "id": 4,
      "city": "بورسعيد",
      "areaName": "بورسعيد",
      "isActive": false,
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


  openPopup(area?: any): void {
    const dialogRef = this.dialog.open(AddEditAreaComponent, {
      panelClass: "area-dialog-responsive",
      data: {area:area},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }


  deletePopup(area?: any): void {
    const dialogRef = this.dialog.open(DeleteAreaComponent, {
      panelClass: "area-dialog-responsive",
      data: {area:area},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

}
