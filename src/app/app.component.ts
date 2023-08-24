import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'classzoom_fe';
  logged: boolean = false;
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
}
