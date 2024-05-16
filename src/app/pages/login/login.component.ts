import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  showForm: number = 0;

  constructor(
    private commonSrv: CommonService,
    private authSrv: AuthService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private notificationSrv: NotificationService
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
  //forgotPassword
  forgotPass: FormGroup<{
    email: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  //confirmPassword
  confirmPass: FormGroup<{
    email: FormControl<string>;
    otp: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: [String(this.forgotPass.value.email), []],
    otp: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
    
  }

  login() {
    if (this.loginForm.valid) {
      this.authSrv.login(this.loginForm.value, (res: any) => {
        if(res){
          this.notificationSrv.showSuccess('Logged in successfully.', 'Success');
          this.commonSrv.logged.next(true);
          this.router.navigate(['/']);
        }
      })
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
    if (this.registerForm.valid) {
      this.authSrv.register(this.registerForm.value, (res: any) => {
        if(res){
          this.notificationSrv.showSuccess('Registered successfully. Login to continue.', 'Success');
          this.showForm = 0;
        }
      })
    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  forgotPassword(){
    if (this.forgotPass.valid) {
      this.authSrv.forgotPassword(this.forgotPass.value, (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.showForm = 3;
          localStorage.setItem('email', String(this.forgotPass.value.email));
        }
      })
    } else {
      Object.values(this.forgotPass.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  confirmPassword(){
    this.confirmPass.value.email = String(localStorage.getItem('email'));
    if (this.confirmPass.valid) {
      console.log('submit: ', this.confirmPass.value);
      this.authSrv.confirmOTP(this.confirmPass.value, (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.showForm = 0;
        }
      })
    } else {
      Object.values(this.confirmPass.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  trans(){
    if(this.showForm) this.showForm = 0;
    else this.showForm = 1;
  }

  showForgotPassForm(){
    this.showForm = 2;
  }

  backToLogin(){
    this.showForm = 0;
  }

}
