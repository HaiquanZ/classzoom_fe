import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  fileList: NzUploadFile[] = [];

  constructor(
    @Inject(NZ_MODAL_DATA) private data: any,
    private modal: NzModalRef<UploadComponent>,
    private http: HttpClient,
    private notificationSrv: NotificationService
  ){}

  close(){
    this.modal.close();
  }

    beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  upload(): void {
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('file', file);
    });
    formData.append('userId', String(localStorage.getItem('userId')));
    let url = '/user/';
    if(this.data.type == 'Avatar'){
      url += 'avatar'
    }else{
      url += 'cover'
    }
    const req = new HttpRequest('POST', url, formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.fileList = [];
          this.modal.close(true);
        },
        () => {
          this.notificationSrv.showError('Upload Failed', 'Error');
          this.modal.close();
        }
      );
  }
}
