import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.scss']
})
export class ListAssignmentComponent {

  listAssignment: any[] = [];
  typeAssignment = 'all';
  loading: boolean = false;

  constructor(
    private router: Router,
    private postSrv: PostService
  ) { }

  ngOnInit() {
    this.getData(this.typeAssignment);
  }

  getData(type: string) {
    this.loading = true;
    this.postSrv.getTaskByPic({ pic: localStorage.getItem('userId'), type: type },
      (res: any) => {
        if (res) {
          this.listAssignment = res.data.tasks;
          this.loading = false;
        }
      })
  }
}
