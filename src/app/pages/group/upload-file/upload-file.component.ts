import { HttpRequest } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { FileService } from 'src/app/services/file.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  fileList: NzUploadFile[] = [];
  uploading: boolean = false;

  constructor(
    private notificationSrv: NotificationService,
    private modal: NzModalRef<UploadFileComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private fileSrv: FileService
  ) { }

  // handleChange({ file, fileList }: NzUploadChangeParam): void {
  //   const status = file.status;
  //   if (status !== 'uploading') {
  //     console.log(file, fileList);
  //   }
  //   if (status === 'done') {
  //     this.msg.success(`${file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     this.msg.error(`${file.name} file upload failed.`);
  //   }
  // }

  close(e: any){
    this.modal.close();
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  upload(){
    let formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('file', file);
    });
    let filePath = 'File/';
    filePath = filePath + this.data.groupId;
    this.data.path.forEach((item : any) => filePath += ('/' + item));
    filePath += '/' + this.fileList[0].name;
    formData.append('filePath', filePath)
    // this.uploading = true;
    console.log(formData);
    const req = new HttpRequest('POST', '/group/file', formData);

    this.fileSrv.uploadFile(req, (res: any) => {
      if(res){
        this.uploading = false;
        this.modal.close(true);
        this.notificationSrv.showSuccess(res.data.message, 'Success');
      }
    })
  }
}
