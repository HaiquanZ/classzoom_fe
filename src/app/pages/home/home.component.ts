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
  listGroup: Array<GroupModel> = [];
  listAssignment: Array<any> = [];
  dataTime: any;
  typeAssignment = 'done';
  
  constructor(
    private groupService: GroupService,
    private postSrv: PostService,
    private router: Router
  ){
    const currentTimeUTC = new Date();
    this.dataTime = new Date(currentTimeUTC.getTime() + (7 * 60 * 60 * 1000))
  }


  ngOnInit(): void {
      //handle user information
      this.userName = localStorage.getItem('username');
      if (localStorage.getItem('gender') === 'male'){
        this.urlAvt = '../../../assets/avatar-male-1.png';
      }else{
        this.urlAvt = '../../../assets/avatar-female-1.png';
      }

      //handle list groups
      // this.groupService.getAllGroups({}, (res: GroupModel[]) => {
      //   if(res){
      //     this.listGroup = res;
      //   }
      // })

      this.listGroup = [
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
        {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      ];

      // this.postSrv.getAssignmentByUser((res: any) => {
      //   if(res){
      //     this.listAssignment = res;
      //   }
      // })
      this.listAssignment = [
        {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'done'},
        {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'cancel'},
        {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'cancel'},
        {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'done'},
        {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'doing'},
        {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'pending'},
      ]
  }

  handleClickGroupItem(id: any){
    this.router.navigate([`/group/detail/${id}`]);
  }
}
