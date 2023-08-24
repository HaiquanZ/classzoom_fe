import { Component, OnInit } from '@angular/core';
import { faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  faFile = faFile;
  faPlus = faPlus;
  list: Array<number> = [1,2,3,4,5];
  logged: boolean = false;
  userName: any;
  urlAvt: any;
  listGroup: Array<any> = [];
  dataTime: any;
  
  constructor(
    private commonService: CommonService,
    private groupService: GroupService,
    private router: Router
  ){}

  //handle change typeHeader
  handleChangeTypeHeader(type: string){
    this.commonService.typeHeader.next(type);
  }

  ngOnInit(): void {
      //handle user information
      this.userName = localStorage.getItem('username');
      if (localStorage.getItem('gender') === 'male'){
        this.urlAvt = '../../../assets/avatar-male-1.png';
      }else{
        this.urlAvt = '../../../assets/avatar-female-1.png';
      }
      //get data time
      this.commonService.getDataTime().subscribe(
        (result) => {
          this.dataTime = result.datetime;
        },
        (er) => {console.log(er);}
      )
      //handle list groups
      this.groupService.getAllGroups().subscribe(
        (result) => {
          this.listGroup = result.slice();
          //console.log(this.listGroup);
        },
        (err) => {console.log(err);}
      )
  }

  handleClickGroupItem(id: any){
    this.router.navigate([`/group/detail/${id}`]);
    this.handleChangeTypeHeader('group');
  }
}
