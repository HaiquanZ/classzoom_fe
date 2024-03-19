import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { GroupModel } from 'src/app/models/group-model';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent {
  listGroup: Array<GroupModel> = [];
  modalRefAnt?: NzModalRef;

  constructor(
    private router: Router,
    private modalService: NzModalService,
  ){}
  
  ngOnInit(){
    this.listGroup = [
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
      {description: 'Group for Backend developer', groupId: '123', groupName: 'VTP CRM', role: 'member', subject: '', totalMember: 5},
    ];
  }

  handleClickGroupItem(id: any){
    this.router.navigate([`/group/detail/${id}`]);
  }

  createGroup(e: any){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Create new group',
      nzContent: CreateGroupComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }
}
