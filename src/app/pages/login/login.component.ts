import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  showLogin: boolean = true;

  constructor(
    private commonSrv: CommonService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) { }

  //loginForm
  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  //registerForm
  registerForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    username: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    username: ['', [Validators.required]]
  });

  ngOnInit(): void {
    
  }

  login() {
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
      this.commonSrv.logged.next(true);
      this.router.navigate(['/']);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  register(){
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
      this.commonSrv.logged.next(true);
      this.router.navigate(['/']);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  trans(){
    this.showLogin = !this.showLogin;
  }

}
