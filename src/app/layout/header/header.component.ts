import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faUserGroup, faPen, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  faHome = faHome;
  faUserGroup = faUserGroup;
  faPen = faPen;
  faUser = faUser;
  public typeHeader: string = 'home';

  public handleChangeType(type: string){
    this.typeHeader = type;
    
  }
}
