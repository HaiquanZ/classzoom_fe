import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.scss']
})
export class ListAssignmentComponent {

  constructor(
    private router: Router
  ){}

  typeAssignment = 'all';

  listAssignment = [
    {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'done'},
    {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'cancel'},
    {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'cancel'},
    {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'done'},
    {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'doing'},
    {name: 'Task 1', dueto: new Date(), content: 'detail', postid:'123', type: 'pending'},
  ]

  handleClickGroupItem(id: any){
    this.router.navigate([`/group/detail/${id}`]);
  }
}
