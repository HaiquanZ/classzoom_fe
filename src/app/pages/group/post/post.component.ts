import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() data: any;
  isReact: boolean = false;
  isEmptyCmt: boolean = false;
  submitting = false;
  inputValue = '';
  isShow: boolean = true;

  constructor(
    private postSrv: PostService,
    private router: Router,
    private notificationSrv: NotificationService,
  ) { 
    this.data = {};
  }
  ngOnInit() {
    let tmp = this.data.reacts.find((item: any) => item.id == localStorage.getItem('userId'));
    this.isReact = tmp ? true : false;
  }

  getData() {
    this.postSrv.getDetailPost({ postId: this.data._id },
      (res: any) => {
        if (res) {
          this.data = res.data;
        }
      }
    )
  }

  loadMoreCmt() {
    this.isEmptyCmt = !this.isEmptyCmt;
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('ok')
      event.preventDefault(); // Prevents the default newline insertion
      this.postSrv.comment(
        { postId: this.data._id, isReply: false, content: this.inputValue },
        (res: any) => {
          if (res) {
            this.getData();
            this.inputValue = '';
            this.notificationSrv.showSuccess(res.data.message, 'Success');
          }
        }
      )
    }
  }

  timeAgo(isoDateString: string): string {
    const now: Date = new Date();
    const past: Date = new Date(isoDateString);
  
    const diffInMs: number = now.getTime() - past.getTime();
    const diffInMinutes: number = Math.floor(diffInMs / (1000 * 60));
    const diffInHours: number = Math.floor(diffInMinutes / 60);
    const diffInDays: number = Math.floor(diffInHours / 24);
  
    if (diffInMinutes < 1) {
      return "just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return `${diffInDays} days ago`;
    }
  }

  showProfile(id: any){
    this.router.navigate(['/profile/' + id]);
  }
}
