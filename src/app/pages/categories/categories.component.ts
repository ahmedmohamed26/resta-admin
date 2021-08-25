import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  loadingSpinner: boolean;
  search: string;
  categories = [
    {
      "id": 1,
      "name": "كافيهات",
      "isActive": true,
    },
    {
      "id": 2,
      "name": "مطاعم",
      "isActive": false,
    },
    {
      "id": 3,
      "name": "سياحة",
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


  openPopup(category?: any): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      panelClass: "category-dialog-responsive",
      data: {category:category},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }


  deletePopup(category?: any): void {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      panelClass: "category-dialog-responsive",
      data: {category:category},
      disableClose: false,
      hasBackdrop: true,
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   this.openModal = false;
    // });
  }

}
