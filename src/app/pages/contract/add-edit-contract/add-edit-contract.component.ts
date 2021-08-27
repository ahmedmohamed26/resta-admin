import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-edit-contract',
  templateUrl: './add-edit-contract.component.html',
  styleUrls: ['./add-edit-contract.component.scss'],
})
export class AddEditContractComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({});
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public contractPopup: MatDialogRef<AddEditContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.setForm();
  }

  setForm(): void {
    this.contractForm = new FormGroup({
      nameOwner: new FormControl(
        this.data.contract ? this.data.contract.nameOwner : '',
        Validators.required
      ),
      phoneOwner: new FormControl(
        this.data.contract ? this.data.contract.phoneOwner : '',
        [
          Validators.required,
          Validators.pattern('^01-?[0-2.?5]\\d*(\\.\\d{1,2})?$'),
          Validators.minLength(11),
          Validators.maxLength(11),
        ]
      ),
      nameManager: new FormControl(
        this.data.contract ? this.data.contract.nameManager : '',
        Validators.required
      ),
      phoneManager: new FormControl(
        this.data.contract ? this.data.contract.phoneManager : '',
        [
          Validators.required,
          Validators.pattern('^01-?[0-2.?5]\\d*(\\.\\d{1,2})?$'),
          Validators.minLength(11),
          Validators.maxLength(11),
        ]
      ),
      email: new FormControl(
        this.data.contract ? this.data.contract.email : '',
        [Validators.required, Validators.email]
      ),
      dateVisit: new FormControl(
        {
          disabled: this.data.contract ? false :true ,
          value: this.data.contract ? this.data.contract.dateVisit : '',
        },
        Validators.required
      ),
      dateFromContract: new FormControl(
        {
          disabled: this.data.contract ? false :true ,
          value: this.data.contract ? this.data.contract.dateFromContract : '',
        },
        Validators.required
      ),
      dateToContract: new FormControl(
        {
          disabled: this.data.contract ? false :true ,
          value: this.data.contract ? this.data.contract.dateToContract : '',
        },
        Validators.required
      ),

      isActive: new FormControl(
        this.data.contract ? this.data.contract.isActive : false,
        Validators.required
      ),
    });
  }

  submit() {
    if (this.contractForm.valid) {
      this.loadingSpinner = true;
      setTimeout(() => {
        this.loadingSpinner = false;
      }, 1000);
    }
  }

  closePopup() {
    this.contractPopup.close();
  }
}
