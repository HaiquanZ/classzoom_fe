import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss']
})
export class UpdateGroupComponent implements OnInit{
  memberList: Array<any> = [];
  groupId: any;

  email: string = '';

  constructor(
    private groupSrv: GroupService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.groupId = this.route.snapshot.paramMap.get('id');
      this.groupSrv.getUserOfGroup(this.groupId, (res: any) => {
        if(res){
          this.memberList = res;
        }
      })
  }

  addMember(){
    if (this.email === ''){
      this.notificationService.showError('Email is required', "Error");
    }else{
      let expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!expression.test(this.email)){
        this.notificationService.showError('Email is not valid', "Error");
      }else{
        let data = {
          email: this.email,
          groupId: this.groupId
        }

        this.groupSrv.addMember(data, (res: any) => {
          if(res){
            window.location.reload();
            this.notificationService.showSuccess(res.msg, "Member added");
          }
        })
      }
    }
  }

  deleteGroup(groupId: any){
    this.groupSrv.deleteGroup(groupId, (res: any) => {
      if(res){
        this.notificationService.showSuccess('Delete Group Success', 'Success');
        this.router.navigate(['/group']);
      }
    })
  }
}
