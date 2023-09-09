import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faSquarePhone, faGear, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CommentService } from 'src/app/services/comment.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit{
  faPenToSquare = faPenToSquare;
  faSquarePhone = faSquarePhone;
  faGear = faGear;
  faBookOpen = faBookOpen;
  groupId: any;
  list: Array<number> = [1,2,3,4,5];
  posts: Array<any> = [];
  userId: any;
  comment: string = '';
  isShow: boolean = false;
  constructor(
    private postService: PostService,
    private router: Router,
    private commonService: CommonService,
    private commentService: CommentService,
    private notificationService: NotificationService
  ){}

  ngOnInit(): void {
    this.commonService.typeHeader.next('group');
      this.groupId = this.router.url.split('/')[3];
      this.userId = localStorage.getItem('id');
      this.postService.getPostByGroupId(this.groupId).subscribe(
        (result) => {
          this.posts = result;
          console.log(result);
        },
        (err) => {console.log(err);}
      );
  }

  createComment(postId: any){
    this.commentService.createComment({
      comment: this.comment,
      postId: postId
    }).subscribe(
      (result) => {
        window.location.reload();
        this.notificationService.showSuccess(result.msg, "Comment created");
      },
      (err) => {console.log(err);}
    )
  }

  showComment(postId: any){
    this.commentService.getCommentByPost(postId).subscribe(
      (result) => {
        for (let i = 0; i < this.posts.length; i++) {
          if(this.posts[i].id == postId){
            this.posts[i].Comment = result;
            break;
          }
        }
        this.isShow = !this.isShow;
        console.log(this.posts);
      },
      (err) => {console.log(err);}
    )
  }

  makeVideoCall(){
    let roomId = Date.now();
    //console.log(roomId);
    this.postService.createPost({
      groupId: this.groupId,
      type: 'call',
      content: roomId,
    }).subscribe(
      (result) => {
        window.open(`http://localhost:3030/${roomId}`);
        window.location.reload();
        this.notificationService.showSuccess("Make a call", 'Success');
      },
      (err) => {console.log(err);}
    )
  }

  joinCall(id: any){
    window.open(`http://localhost:3030/${id}`);
  }
}
