import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  subjects:Array<string> = ['bi', 'ch', 'ge', 'hi', 'la', 'li', 'ma', 'ph'];
  //@ts-ignore
  createGroupForm:FormGroup;
  constructor(
    private router: Router,
    private groupSrv: GroupService,
    private notificationService: NotificationService
  ){};

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.createGroupForm = new FormGroup({
      groupname: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required])
    });
  }

  createGroup(){
    this.groupSrv.createGroup(this.createGroupForm.value, (res: any) => {
      if(res){
        this.notificationService.showSuccess(res.msg, "Sucess");
        this.router.navigate(['']);
      }
    })
  }
}
