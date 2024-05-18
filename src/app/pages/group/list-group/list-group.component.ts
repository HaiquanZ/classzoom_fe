import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { GroupModel } from 'src/app/models/group-model';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent {
  listGroup: any[] = [];
  modalRefAnt?: NzModalRef;
  currentPage: number = 1;
  loading: boolean = false;
  totalRecord: number = 0;

  constructor(
    private router: Router,
    private modalService: NzModalService,
    private groupSrv: GroupService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.groupSrv.getAllGroups({ id: localStorage.getItem('userId'), size: 15, page: this.currentPage },
      (res: any) => {
        if (res) {
          this.listGroup = res.data.groups;
          this.totalRecord = res.data.totalRecord;
          this.loading = false;
        }
      }
    )
  }

  handleClickGroupItem(id: any) {
    this.router.navigate([`/group/detail/${id}`]);
  }

  createGroup(e: any) {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Create new group',
      nzContent: CreateGroupComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if (status) {
        this.getData();
      }
    })
  }

  handlePageIndex(e: any){
    this.currentPage = e;
    this.getData()
  } 
}
