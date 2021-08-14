import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-edit-section',
  templateUrl: './add-edit-section.component.html',
  styleUrls: ['./add-edit-section.component.scss']
})
export class AddEditSectionComponent implements OnInit {
  sectionForm: FormGroup = new FormGroup({});
  loadingSpinner: boolean;
  constructor(
    public dialog: MatDialog,
    public sectionPopup: MatDialogRef<AddEditSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.setForm();
  }

  setForm(): void {
    this.sectionForm = new FormGroup({
      name: new FormControl(
        this.data.section ? this.data.section.name : '',
        Validators.required
      ),
      isActive: new FormControl(
        this.data.section ? this.data.section.isActive : false,
        Validators.required
      ),
    });
  }

  submit() {
    if (this.sectionForm.valid) {
      this.loadingSpinner = true;
      setTimeout(() => {
        this.loadingSpinner = false;
      }, 1000);
    }
  }

  closePopup() {
    this.sectionPopup.close();
  }

}
