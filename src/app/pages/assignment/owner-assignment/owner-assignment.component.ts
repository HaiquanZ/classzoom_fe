import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
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
    private commonService: CommonService,
    private postService: PostService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.commonService.typeHeader.next('assignment');
      this.postId = this.route.snapshot.paramMap.get('id');
      this.postService.getAnswerOfAssignment(this.postId).subscribe(
        (result) => {
          this.listAnswer = result.filter((item: any) => item.content != 'owner');
        },
        (err) => {console.log(err);}
      )

      this.postService.getDetailAssignment(this.postId).subscribe(
        (result) => {
          this.detailAssignment = result;
        },
        (err) => {console.log(err);}
      )
  }
}
