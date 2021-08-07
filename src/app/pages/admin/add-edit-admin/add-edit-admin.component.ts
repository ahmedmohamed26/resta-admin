import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.scss'],
})
export class AddEditAdminComponent implements OnInit {
  adminForm: FormGroup = new FormGroup({});
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public adminPopup: MatDialogRef<AddEditAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.setForm();
  }

  setForm(): void {
    this.adminForm = new FormGroup({
      firstName: new FormControl(this.data.admin ? this.data.admin.firstName : '', Validators.required),
      lastName: new FormControl(this.data.admin ? this.data.admin.lastName : '', Validators.required),
      email: new FormControl(this.data.admin ? this.data.admin.email : '', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(
        this.data.admin ? this.data.admin.password : '',
        [
          Validators.required,
          // Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
          Validators.minLength(8),
        ]
      ),
    });
  }

  submit() {
    if (this.adminForm.valid) {      
      this.loadingSpinner = true;
      setTimeout(() => {
        this.loadingSpinner = false;
      }, 1000);
    }

  }

  closePopup() {
    this.adminPopup.close();
  }
}
