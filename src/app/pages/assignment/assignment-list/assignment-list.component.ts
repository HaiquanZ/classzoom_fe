import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit{
  faFile = faFile;
  listAssignment: any;
  assAll: number = 0;
  assOwner: number = 0;
  assNotTurnIn: number = 0;
  assDone: number = 0;

  constructor(
    private postService: PostService
  ){}

  ngOnInit(): void {
      this.postService.getAssignmentByUser().subscribe(
        (result) => {
          this.listAssignment = result;
          this.assAll = result.length;
          for (let i=0; i < this.assAll; i++){
            if (result[i].content == 'owner') this.assOwner++;
            else if (result[i].content == 'none') this.assNotTurnIn++;
            else this.assDone++;
          }
        },
        (err) => {console.log(err);}
      )
  }
}
