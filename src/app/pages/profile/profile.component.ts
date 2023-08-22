import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName: string = '';
  email: string = '';
  gender: string = '';
  urlAvt: string = '';

  constructor(
    private commonService: CommonService,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ){}
  ngOnInit(): void {
    this.commonService.typeHeader.next('profile');
    this.userName = this.authService.userName;
    this.email = this.authService.email;
    this.gender = this.authService.gender;
    if (this.authService.gender === 'male'){
      this.urlAvt = '../../../assets/avatar-male-1.png';
    }else{
      this.urlAvt = '../../../assets/avatar-female-1.png';
    }
  }

  handleLogOut(){
    this.notificationService.showSuccess("See you again!", "Logout completed")
    localStorage.removeItem('token');
    this.commonService.logged.next(false);
    this.commonService.typeHeader.next('home');
    this.router.navigate(['']);
  }
}
