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

  showLogin: boolean = true;

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
      console.log('submit', this.registerForm.value);
      this.authSrv.register(this.registerForm.value, (res: any) => {
        if(res){
          this.notificationSrv.showSuccess('Registered successfully. Login to continue.', 'Success');
          this.showLogin = true;
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

  trans(){
    this.showLogin = !this.showLogin;
  }

}
