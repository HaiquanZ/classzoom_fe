import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { TaskOwnerComponent } from '../task-owner/task-owner.component';

@Component({
  selector: 'app-team-overload',
  templateUrl: './team-overload.component.html',
  styleUrls: ['./team-overload.component.scss']
})
export class TeamOverloadComponent {

  modalRefAnt?: NzModalRef;

  constructor(
    private modalService: NzModalService,
  ){}

  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 10
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 5
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 7
    }
  ];

  listTable: any[] = [
    { name: 'John Brown', waiting: 2, doing: 2, cancel: 0, pending: 1, done: 1},
    { name: 'John Brown', waiting: 2, doing: 2, cancel: 0, pending: 1, done: 1},
    { name: 'John Brown', waiting: 2, doing: 2, cancel: 0, pending: 1, done: 1},
    { name: 'John Brown', waiting: 2, doing: 2, cancel: 0, pending: 1, done: 1}
  ];

  openTaskOwner(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Task Detail',
      nzContent: TaskOwnerComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 500,
      nzCentered: true
    })
  }
}
