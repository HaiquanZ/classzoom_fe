import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { FileService } from 'src/app/services/file.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss']
})
export class DeleteFileComponent {
  constructor(
    private modal: NzModalRef<DeleteFileComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private notificationSrv: NotificationService,
    private fileSrv: FileService
  ){}

  close(){
    this.modal.close();
  }

  deleteFile(){
    this.fileSrv.deleteFile({ filePath: this.data.path},
      (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.modal.close(true);
        }
      }
    )
  }
}
