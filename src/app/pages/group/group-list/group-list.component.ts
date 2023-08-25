import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit{

  listGroup: any;
  groupCount: number = 0;
  moderatorCount: number = 0;
  memberCount: number = 0;

  constructor(
    private groupService: GroupService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.groupService.getAllGroups().subscribe(
        (result) => {
          this.listGroup = result;
          //console.log(result);
          // update abstract count
          this.listGroup.map((element: any) => {
            this.groupCount++;
            if (element.role === 'member') this.memberCount++;
            if (element.role === 'moderator') this.moderatorCount++;
          });
        },
        (err) => {console.log(err);}
      );
  }

}
