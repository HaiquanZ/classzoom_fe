import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';
import { NzSiderComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'classzoom_fe';
  logged: boolean = false;
  isCollapsed: boolean = false;
  textLogo: string = 'Space';
  @ViewChild('sidebar', {static: false}) sideBar!: NzSiderComponent;

  constructor(private commonService: CommonService, private router: Router){}


  ngOnInit() {
    // handle when user reload page
    if (localStorage.getItem('token')){
      this.commonService.logged.next(true);
    }
    //handle when user did not login
    this.commonService.logged.subscribe(logged => this.logged = logged);
      if (!this.logged){
        this.router.navigate(['/login']);
      }
  }

  ngAfterViewInit() {
    console.log('Sidebar: ', this.sideBar.widthSetting);
  }

  onCollapseChange(e: any){
    if(e){
      this.textLogo = 'S';
    }else{
      this.textLogo = 'Space';
    }
  }

  logout(){
    this.logged = false;
  }
}
