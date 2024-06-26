import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { GroupModel } from 'src/app/models/group-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  list: Array<number> = [1,2,3,4,5];
  logged: boolean = false;
  userName: any;
  urlAvt: any;
  listGroup: any;
  listAssignment: Array<any> = [];
  dataTime: any;
  typeAssignment = 'all';
  myId: any;
  currentPage: number = 1;
  
  constructor(
    private groupSrv: GroupService,
    private postSrv: PostService,
    private router: Router
  ){
    const currentTimeUTC = new Date();
    this.dataTime = new Date(currentTimeUTC.getTime() + (7 * 60 * 60 * 1000))
  }


  ngOnInit() {
      //handle user information
      this.userName = localStorage.getItem('username');
      //handle list groups
      this.groupSrv.getAllGroups({size: 8, id: localStorage.getItem('userId'), page: this.currentPage}, (res: any) => {
        if(res){
          this.listGroup = res.data.groups;
        }
      })
      this.getTask(this.typeAssignment);
  }

  getTask(type: string){
    this.postSrv.getTaskByPic({type: this.typeAssignment, pic: localStorage.getItem('userId')},
    (res: any) => {
      if(res){
        this.listAssignment = res.data.tasks;
      }
    }
  )
  }

  handleClickGroupItem(id: any){
    this.router.navigate([`/group/detail/${id}`]);
  }

  handleCreateGr(){
    
  }

  navigateProfile(){
    this.myId = localStorage.getItem('userId');
    this.router.navigate([`/profile/${this.myId}`]);
  }
}
