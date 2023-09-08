import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{
  //@ts-ignore
  createPostForm: FormGroup;
  groupId: any;

  constructor(
    private commentService: CommonService,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ){}

  ngOnInit(): void {
      this.commentService.typeHeader.next('group');
      this.initForm();
      this.groupId = this.route.snapshot.paramMap.get('id');
  }

  initForm(){
    this.createPostForm = new FormGroup({
      content: new FormControl('', [Validators.required]),
    })
  }

  createPost(){
    this.postService.createPost({
      groupId: this.groupId,
      content: this.createPostForm.value.content,
      type: 'post'
    }).subscribe(
      (result) => {
        this.notificationService.showSuccess(result.msg, "Successfully created");
        this.router.navigate([`/group/detail/${this.groupId}`]);
      },
      (err) => {console.log(err);}
    )
  }
}
