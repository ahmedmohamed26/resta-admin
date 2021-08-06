import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loadingSpinner: boolean;
  admins = [
    {
      "id": 1,
      "email": "ahmed.m.moneem@gmail.com",
      "password":"12345678"
    },
    {
      "id": 2,
      "email": "omar@gmail.com",
      "password":"12345678"
    },
    {
      "id": 3,
      "email": "abdo@gmail.com",
      "password":"12345678"
    }
  ]
  constructor(public dialog: MatDialog) {
    this.loadingSpinner = true;
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingSpinner = false;
    }, 1500);
  }


  openPopup(item?: any): void {
    const dialogRef = this.dialog.open(AddEditAdminComponent, {
      panelClass: "dialog-responsive",
      data: {admin:item},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

}
