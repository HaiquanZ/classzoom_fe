import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faUserGroup, faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faUserGroup = faUserGroup;
  faPen = faPen;
  faUser = faUser;

  constructor(public common : CommonService){}

  public handleChangeType(type: string){
    this.common.typeHeader = type;
    
  }

  ngOnInit(): void {
      
  }
}
