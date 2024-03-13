import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent {

  constructor(
    private modal: NzModalRef<DetailEventComponent>
  ){}

  //mock data
  notes = [
    { type: 'warning', content: 'This is warning event' },
    { type: 'success', content: 'This is very long usual event........' },
    { type: 'error', content: 'This is error event 1.' },
  ]

  tabs = [
    {
      name: 'All note',
      icon: 'table'
    },
    {
      name: 'Create note',
      icon: 'edit'
    }
  ];

  close(e: any){
    e.preventDefault();
    this.modal.close();
  }
}
