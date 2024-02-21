import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-owner-assignment',
  templateUrl: './owner-assignment.component.html',
  styleUrls: ['./owner-assignment.component.scss']
})
export class OwnerAssignmentComponent implements OnInit{
  postId: any;
  listAnswer: any;
  detailAssignment: any;

  constructor(
    private postSrv: PostService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.postId = this.route.snapshot.paramMap.get('id');
      this.postSrv.getAnswerOfAssignment(this.postId, (res: any) => {
        if(res){
          this.listAnswer = res.filter((item: any) => item.content != 'owner');
        }
      })
      this.postSrv.getDetailAssignment(this.postId, (res: any) => {
        if(res){
          this.detailAssignment = res;
        }
      })
  }
}
