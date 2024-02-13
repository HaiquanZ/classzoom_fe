import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';
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
    private authSrv: AuthService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
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
          this.notification.success(
            'Success',
            'Logged in successfully',
            {
              nzStyle: { backgroundColor: 'var(--success-light)'}
            }
          );
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
