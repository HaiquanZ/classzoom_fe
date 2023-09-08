import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-assignment',
  templateUrl: './detail-assignment.component.html',
  styleUrls: ['./detail-assignment.component.scss']
})
export class DetailAssignmentComponent implements OnInit{
  faArrowLeft = faArrowLeft;
  name: string = '';
  content: string = '';
  dueto: any;
  postId: any;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ){};

  ngOnInit(): void {
      this.postId = this.route.snapshot.paramMap.get('id');
      this.commonService.typeHeader.next('assignment');
      this.postService.getDetailAssignment(this.postId).subscribe(
        (result) => {
          this.content = result.content;
          this.dueto = result.Assignment.dueto,
          this.name = result.Assignment.name
        },
        (err) => {console.log(err);}
      )
  }
}
