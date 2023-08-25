import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{
  //@ts-ignore
  createPostForm: FormGroup;

  constructor(
    private commentService: CommonService
  ){}

  ngOnInit(): void {
      this.commentService.typeHeader.next('group');
      this.initForm();
  }

  initForm(){
    this.createPostForm = new FormGroup({
      content: new FormControl('', [Validators.required]),
    })
  }

  createPost(){
    console.log(this.createPostForm.value);
  }
}
