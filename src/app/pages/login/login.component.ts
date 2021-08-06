import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup = new FormGroup({});
  loadingSpinner: boolean;

  constructor(private router: Router) {
    this.loadingSpinner = false;
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
        Validators.minLength(8),
      ]),
    });
  }

  submit() {
    if (this.LoginForm.valid) {
      let email = this.LoginForm.get('email')?.value;
      let pass = this.LoginForm.get('password')?.value;
      if (email == 'admin@resta.com' && pass == '12345678') {
        this.loadingSpinner = true;
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
