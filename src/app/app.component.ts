import { Component, HostListener, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'classzoom_fe';
  logged: boolean = false;
  isCollapsed: boolean = false;
  textLogo: string = 'Space';
  collapseWidth: number = 80;
  sidebarWidth: string = '200px';
  overlay: boolean = true;
  titleMobile: string = 'Space';

  //handle resize to solve resposive sidebar
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleCollapseWidth(event.target.outerWidth);
  }

  constructor(
    private commonService: CommonService,
    private router: Router,
    private authSrv: AuthService,
    private notificationSrv: NotificationService
  ) {
    this.handleCollapseWidth(window.outerWidth);
    if (window.outerWidth < 576) {
      this.isCollapsed = true;
    }
  }


  ngOnInit() {
    // handle when user reload page
    // if (localStorage.getItem('token')) {
    //   this.commonService.logged.next(true);
    // }
    this.commonService.logged.next(true);
    //handle when user did not login
    this.commonService.logged.subscribe(logged => this.logged = logged);
    if (!this.logged) {
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewInit() {
    // setInterval(() => {
    //   console.log('width: ', this.windowSize);
    // }, 2000)
  }

  onCollapseChange(e: any) {
    this.textLogo = e ? 'S' : 'Space';
  }

  logout() {
    this.authSrv.removeInfoLogout();
    this.logged = false;
    this.notificationSrv.showSuccess('Logout successfully', 'Success')
  }

  handleCollapseWidth(val: number) {
    if (val < 576) {
      this.collapseWidth = 0;
      this.sidebarWidth = String(val * 0.7) + 'px';
    } else {
      this.collapseWidth = 80;
      this.sidebarWidth = '200px';
    }
  }

  handleCollapseMobile() {
    this.isCollapsed = !this.isCollapsed;
    this.overlay = !this.overlay;
    this.titleMobile = this.isCollapsed ? 'Space' : '';
  }
}
