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
    private groupService: GroupService,
    private notificationService: NotificationService
  ){};

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.createGroupForm = new FormGroup({
      groupName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required])
    });
  }

  createGroup(){
    this.groupService.createGroup({
      groupname: this.createGroupForm.value.groupName,
      description: this.createGroupForm.value.description,
      subject: this.createGroupForm.value.subject
    }).subscribe(
      (result) => {
        //console.log(result);
        this.notificationService.showSuccess(result.msg, "Sucess");
        this.router.navigate(['']);
      },
      (err) => {console.log(err);}
    )
  }
}
