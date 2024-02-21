import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private postSrv: PostService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
      this.answerId = this.route.snapshot.paramMap.get('id');
      this.postSrv.getFile(this.answerId, (res: any) => {
        if(res){
          this.data = res;
          this.url = `${this.baseUrl}/${res.content}`;
          console.log(this.url);
        }
      })
  }
}
