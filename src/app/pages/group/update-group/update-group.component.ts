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
    private groupService: GroupService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.groupId = this.route.snapshot.paramMap.get('id');
      //console.log(this.groupId);
      this.groupService.getUserOfGroup(this.groupId).subscribe(
        (result) => {
          //console.log(result);
          this.memberList = result;
        },
        (err) => {console.log(err);}
      )
  }

  addMember(){
    if (this.email === ''){
      this.notificationService.showError('Email is required', "Error");
    }else{
      let expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!expression.test(this.email)){
        this.notificationService.showError('Email is not valid', "Error");
      }else{
        this.groupService.addMember({
          email: this.email,
          groupId: this.groupId
        }).subscribe(
          (result) => {
            window.location.reload();
            this.notificationService.showSuccess(result.msg, "Member added");
          },
          (err) => {this.notificationService.showError(err.error.error, "Error");}
        )
      }
    }
  }

  deleteGroup(groupId: any){
    this.groupService.deleteGroup(groupId).subscribe(
      (result) => {
        this.notificationService.showSuccess('Delete Group Success', 'Success');
        this.router.navigate(['/group']);
      },
      (err) => { this.notificationService.showError(err.msg, 'Error');}
    )
  }
}
