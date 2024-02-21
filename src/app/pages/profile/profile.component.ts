import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName: any;
  email: any;
  gender: any;
  urlAvt: any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notificationService: NotificationService
  ){}
  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.gender = localStorage.getItem('gender');
    if (this.gender === 'male'){
      this.urlAvt = '../../../assets/avatar-male-1.png';
    }else{
      this.urlAvt = '../../../assets/avatar-female-1.png';
    }
  }

  handleLogOut(){
    this.notificationService.showSuccess("See you again.", "Logout completed")
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('gender');
    localStorage.removeItem('id');
    this.commonService.logged.next(false);
    this.router.navigate(['/login']);
  }
}
