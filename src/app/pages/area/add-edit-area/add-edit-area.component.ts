import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-area',
  templateUrl: './add-edit-area.component.html',
  styleUrls: ['./add-edit-area.component.scss']
})
export class AddEditAreaComponent implements OnInit {
  areaForm: FormGroup = new FormGroup({});
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public areaPopup: MatDialogRef<AddEditAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.setForm();
  }

  setForm(): void {
    this.areaForm = new FormGroup({
      city: new FormControl(
        this.data.area ? this.data.area.city : '',
        Validators.required
      ),
      areaName: new FormControl(
        this.data.area ? this.data.area.areaName : '',
        Validators.required
      ),
      isActive: new FormControl(
        this.data.area ? this.data.area.isActive : false,
        Validators.required
      ),
    });
  }

  submit() {
    if (this.areaForm.valid) {
      this.loadingSpinner = true;
      setTimeout(() => {
        this.loadingSpinner = false;
      }, 1000);
    }
  }

  closePopup() {
    this.areaPopup.close();
  }

}
