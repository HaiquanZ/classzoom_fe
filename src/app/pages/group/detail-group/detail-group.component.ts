import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faSquarePhone, faGear } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit{
  faPenToSquare = faPenToSquare;
  faSquarePhone = faSquarePhone;
  faGear = faGear;
  grouId: any;
  list: Array<number> = [1,2,3,4,5];
  posts: Array<any> = [];
  
  constructor(
    private postService: PostService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.grouId = this.router.url.split('/')[3];
      this.postService.getPostByGroupId(this.grouId).subscribe(
        (result) => {
          this.posts = result;
          console.log(result);
        },
        (err) => {console.log(err);}
      )
  }
}
