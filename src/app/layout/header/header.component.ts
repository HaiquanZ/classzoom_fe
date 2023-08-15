import { Component } from '@angular/core';
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
  typeHeader: string = 'home';

  handleChangeType(type: string){
    this.typeHeader = type;
  }
}
