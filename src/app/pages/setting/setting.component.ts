import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  loadingSpinner: boolean;
  loadingSpinnerButton: boolean;
  settingForm: FormGroup = new FormGroup({});
  setting: any = {};
  constructor(public dialog: MatDialog) {
    this.loadingSpinner = true;
    this.loadingSpinnerButton = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingSpinner = false;
    }, 1500);
    this.setForm();
  }

  setForm(): void {
    this.settingForm = new FormGroup({
      about: new FormControl(this.setting ? this.setting.about : ''),
      privacy: new FormControl(this.setting ? this.setting.privacy : ''),
      terms: new FormControl(this.setting ? this.setting.terms : ''),
      facebookLink: new FormControl(this.setting ? this.setting.facebookLink : ''),
      instgramLink: new FormControl(this.setting ? this.setting.instgramLink : ''),
      twitterLink: new FormControl(this.setting ? this.setting.twitterLink : ''),
      websiteLink: new FormControl(this.setting ? this.setting.websiteLink : ''),
      tiktokLink: new FormControl(this.setting ? this.setting.tiktokLink : ''),
      whatsappNumber:new FormControl(this.setting ? this.setting.whatsappNumber : ''),
    });
  }

  submit() {
    if (this.settingForm.valid) {
      this.loadingSpinnerButton = true;
      setTimeout(() => {
        this.loadingSpinnerButton = false;
      }, 1000);
    }
  }
}
