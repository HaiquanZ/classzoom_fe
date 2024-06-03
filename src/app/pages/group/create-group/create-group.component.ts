import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs';
import { GroupService } from 'src/app/services/group.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent {

  fileList: NzUploadFile[] = [];

  constructor(
    private fb: NonNullableFormBuilder,
    private notificationSrv: NotificationService,
    private groupSrv: GroupService,
    private modal: NzModalRef<CreateGroupComponent>,
    private http: HttpClient,
  ) {

  }

  createForm: FormGroup<{
    name: FormControl<string>;
    describe: FormControl<string>;
    img: FormControl<any>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    describe: ['', [Validators.required]],
    img: [null, []]
  });

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  create() {
    if (this.createForm.valid) {
      this.groupSrv.createGroup(
        this.createForm.value,
        (res: any) => {
          if (res) {
            this.notificationSrv.showSuccess(res.data.message, 'Success');
            if (this.fileList.length) {
              this.handleUpload(res.data.group._id);
            }
            this.modal.close(true);
          }
        }
      )
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleUpload(id: any): void {
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.fileList = [];
        },
        () => {

        }
      );
  }


}
