import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { GroupService } from 'src/app/services/group.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private notificationSrv: NotificationService,
    private groupSrv: GroupService,
    private modal: NzModalRef<CreateGroupComponent>
  ){

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

  create(){
    if (this.createForm.valid) {
      this.groupSrv.createGroup(
        this.createForm.value,
        (res: any)  => {
          if(res){
            this.notificationSrv.showSuccess(res.data.message, 'Success');
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

  fileList: NzUploadFile[] = [
    // {
    //   uid: '-1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: 'http://www.baidu.com/xxx.png'
    // }
  ];

  handleChange(info: NzUploadChangeParam): void {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
  }
}
