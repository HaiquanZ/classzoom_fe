import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss']
})
export class CreateAssignmentComponent implements OnInit{
  //@ts-ignore
  createAssignmentForm: FormGroup;
  groupId: any;

  constructor(
    private commonService: CommonService,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ){}

  initForm(){
    this.createAssignmentForm = new FormGroup({
      content: new FormControl('', [Validators.required]),
      dueto: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
      this.commonService.typeHeader.next('assignment');
      this.initForm();
      this.groupId = this.route.snapshot.paramMap.get('id');
  }

  createAssignment(){
    this.postService.createPost({
      type: 'assignment',
      groupId: this.groupId,
      content: this.createAssignmentForm.value.content,
      dueto: this.createAssignmentForm.value.dueto,
      name: this.createAssignmentForm.value.name
    }).subscribe(
      (result) => {
        this.notificationService.showSuccess(result.msg, "Successfully created");
        this.router.navigate([`/group/detail/${this.groupId}`]);
      },
      (err) => {console.log(err);}
    )
    
  }
}
