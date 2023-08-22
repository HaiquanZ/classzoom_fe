import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isLogin: boolean = true;
  data: any;
  // @ts-ignore
  formGroup: FormGroup;
  // @ts-ignore
  registerForm: FormGroup;

  changeisLogin(){
    this.isLogin = !this.isLogin;
  }

  constructor(
    private notifiService: NotificationService,
    private authService: AuthService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      username: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    })
  }

  login(){
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value.email, this.formGroup.value.password).subscribe(
        (result) => {
          this.notifiService.showSuccess("Hello. Have a nice day!", "Login success!");
          this.authService.email = result.data.email;
          this.authService.id = result.data.id;
          this.authService.gender = result.data.gender;
          this.authService.userName = result.data.username;
          localStorage.setItem('token', result.data.token);
          this.commonService.logged.next(true);
          this.router.navigate(['']);
        },
        (err) => {this.notifiService.showError(err.error.error, "Login failed!");}
      )
    }else{
      this.notifiService.showError("Some information of field is invalid", "Login failed!");
    }
  }

  register() {
    if (this.registerForm.valid){
      const data = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        username: this.registerForm.value.username,
        gender: this.registerForm.value.gender
      }
      this.authService.register(data).subscribe(
        (result) => {
          this.notifiService.showSuccess("Login for going on!", "Register success!");
          this.changeisLogin();
        },
        (err) => {this.notifiService.showError(err.error.error, "Register failed!");}
      )
    }else{
      this.notifiService.showError("Some information of field is invalid", "Register failed!");
    }
  }
}
