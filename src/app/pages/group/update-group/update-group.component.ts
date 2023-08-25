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
  list: Array<number> = [1,2,3,4,5,6,7,8,9,10];
  groupId: any;

  constructor(
    private groupService: GroupService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.groupId = this.route.snapshot.paramMap.get('id');
      //console.log(this.groupId);
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
