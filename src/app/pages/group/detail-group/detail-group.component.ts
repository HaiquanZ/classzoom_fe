import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faSquarePhone, faGear, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faSquarePhone = faSquarePhone;
  faGear = faGear;
  faBookOpen = faBookOpen;
  groupId: any;
  list: Array<number> = [1, 2, 3, 4, 5];
  posts: Array<any> = [];
  userId: any;
  comment: string = '';
  isShow: boolean = false;
  constructor(
    private postSrv: PostService,
    private router: Router,
    private commentSrv: CommentService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.groupId = this.router.url.split('/')[3];
    this.userId = localStorage.getItem('id');
    this.postSrv.getPostByGroupId(this.groupId, (res: any) => {
      if(res){
        this.posts = res;
      }
    })
  }

  createComment(postId: any) {
    let data = {
      comment: this.comment,
      postId: postId
    }
    this.commentSrv.createComment(data, (res: any) => {
      if (res) {
        window.location.reload();
        this.notificationService.showSuccess(res.msg, "Comment created");
      }
    })
  }

  showComment(postId: any) {
    this.commentSrv.getCommentByPost(postId, (res: any) => {
      if (res) {
        console.log(res);
        for (let i = 0; i < this.posts.length; i++) {
          if (this.posts[i].id == postId) {
            this.posts[i].Comment = res;
            break;
          }
        }
        this.isShow = !this.isShow;
      }
    })
  }

  makeVideoCall() {
    let roomId = Date.now();
    let data = {
      groupId: this.groupId,
      type: 'call',
      content: roomId
    }
    this.postSrv.createPost(data, (res: any) => {
      if(res){
        window.open(`http://localhost:3030/${roomId}`);
        window.location.reload();
        this.notificationService.showSuccess("Make a call", 'Success');
      }
    })
  }

  joinCall(id: any) {
    window.open(`http://localhost:3030/${id}`);
  }
}
