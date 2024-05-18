import { Component, Inject } from '@angular/core';
import {  Router } from '@angular/router';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { GroupService } from 'src/app/services/group.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrls: ['./delete-group.component.scss']
})
export class DeleteGroupComponent {

  constructor(
    private modal: NzModalRef<DeleteGroupComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private groupSrv: GroupService,
    private notificationSrv: NotificationService,
    private router: Router
  ){}

  close(e: any){
    e.preventDefault();
    this.modal.close();
  }

  delete(){
    this.groupSrv.deleteGroup(this.data,
      (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.router.navigate(['/']);
          this.modal.close();
        }
      }
    )
  }
}
