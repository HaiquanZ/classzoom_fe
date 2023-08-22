import { Component, OnInit } from '@angular/core';
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
  hiddenHeader: boolean = true;

  typeHeader: string = 'home';

  constructor(
    public common : CommonService,
  ){}

  
  public handleChangeType(type: string){
    this.typeHeader = type;
    
  }

  ngOnInit(): void {
      this.common.typeHeader.subscribe(type => this.typeHeader = type);
      this.common.logged.subscribe( logged => this.hiddenHeader = logged);
  }
}
