import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'classzoom_fe';
  constructor(private commonService: CommonService){}

  ngOnInit() {
    if (localStorage.getItem('token')){
      this.commonService.logged.next(true);
    }
  }
}
