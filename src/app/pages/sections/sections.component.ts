import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditSectionComponent } from './add-edit-section/add-edit-section.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  loadingSpinner: boolean;
  search: string;
  sections = [
    {
      "id": 1,
      "name": "اماكن مقترحة",
      "isActive": true,
    },
    {
      "id": 2,
      "name": "اماكن ليليه",
      "isActive": false,
    },
    {
      "id": 3,
      "name": "اماكن صيفية",
      "isActive": true,
    },
    {
      "id": 4,
      "name": "فوتوسيشن",
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


  openPopup(section?: any): void {
    const dialogRef = this.dialog.open(AddEditSectionComponent, {
      panelClass: "category-dialog-responsive",
      data: {section:section},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }


  deletePopup(section?: any): void {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      panelClass: "category-dialog-responsive",
      data: {section:section},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

}
