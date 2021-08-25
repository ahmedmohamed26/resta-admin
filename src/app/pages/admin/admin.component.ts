import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loadingSpinner: boolean;
  search: string;
  admins = [
    {
      "id": 1,
      "email": "ahmed.m.moneem@gmail.com",
      "password": "12345678",
      "firstName": "ahmed",
      "lastName": "mohamed"
    },
    {
      "id": 2,
      "email": "omar@gmail.com",
      "password": "12345678",
      "firstName": "omar",
      "lastName": "ibrahim"
    },
    {
      "id": 3,
      "email": "abdo@gmail.com",
      "password": "12345678",
      "firstName": "abdel hamed",
      "lastName": "nshat"
    }
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

  deletePopup(admin?: any): void {
    const dialogRef = this.dialog.open(DeleteAdminComponent, {
      panelClass: "admins-dialog-responsive",
      data: {admin:admin},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

}
