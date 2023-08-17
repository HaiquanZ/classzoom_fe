import { Component, OnInit } from '@angular/core';
import { faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  faFile = faFile;
  faPlus = faPlus;
  list: Array<number> = [1,2,3,4,5];
  
  constructor(public common: CommonService){}

  ngOnInit(): void {
      
  }

  handleClickProfile(){
    this.common.typeHeader = 'profile';
  }
}
