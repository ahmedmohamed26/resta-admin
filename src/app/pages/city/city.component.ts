import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCityComponent } from './add-edit-city/add-edit-city.component';
import { DeleteCityComponent } from './delete-city/delete-city.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  loadingSpinner: boolean;
  search: string;
  cities = [
    {
      "id": 1,
      "name": "القاهرة",
      "isActive": true,
    },
    {
      "id": 2,
      "name": "الجيزة",
      "isActive": false,
    },
    {
      "id": 3,
      "name": "الأسكندرية",
      "isActive": true,
    },
    {
      "id": 4,
      "name": "بورسعيد",
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


  openPopup(city?: any): void {
    const dialogRef = this.dialog.open(AddEditCityComponent, {
      panelClass: "city-dialog-responsive",
      data: {city:city},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }


  deletePopup(city?: any): void {
    const dialogRef = this.dialog.open(DeleteCityComponent, {
      panelClass: "city-dialog-responsive",
      data: {city:city},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }
}
