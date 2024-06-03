import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-task-owner',
  templateUrl: './task-owner.component.html',
  styleUrls: ['./task-owner.component.scss']
})
export class TaskOwnerComponent {
  constructor(
    private modal: NzModalRef<TaskOwnerComponent>
  ){}

  close(){
    this.modal.close();
  }
} 
