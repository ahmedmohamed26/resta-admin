import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({});
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public categoryPopup: MatDialogRef<AddEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.setForm();
  }

  setForm(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl(
        this.data.category ? this.data.category.name : '',
        Validators.required
      ),
      isActive: new FormControl(
        this.data.category ? this.data.category.isActive : false,
        Validators.required
      ),
    });
  }

  submit() {
    if (this.categoryForm.valid) {
      this.loadingSpinner = true;
      setTimeout(() => {
        this.loadingSpinner = false;
      }, 1000);
    }
  }

  closePopup() {
    this.categoryPopup.close();
  }
}
