import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.scss']
})
export class ViewAnswerComponent implements OnInit{
  answerId: any;
  data: any;
  baseUrl: string = environment.server.apiUrl;
  url: any;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ){}

  ngOnInit(): void {
      this.answerId = this.route.snapshot.paramMap.get('id');
      this.commonService.typeHeader.next('assignment');
      this.postService.getFile(this.answerId).subscribe(
        (result) => {
          this.data = result;
          this.url = `${this.baseUrl}/${result.content}`;
          console.log(this.url);
        },
        (err) => {console.log(err);}
      )
  }
}
