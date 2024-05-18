import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  constructor(
    private modal: NzModalRef<CreatePostComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private postSrv: PostService,
    private notificationSrv: NotificationService,
    private fb: NonNullableFormBuilder,
  ){}


  createForm: FormGroup<{
    content: FormControl<string>;
    isAssignment: FormControl<boolean>;
    groupId: FormControl<string>;
  }> = this.fb.group({
    content: ['', [Validators.required]],
    isAssignment: [false, [Validators.required]],
    groupId: ['', []]
  });

  close(e: any){
    e.preventDefault();
    this.modal.close();
  }

  createPost(){
    if (this.createForm.valid) {
      this.createForm.value.groupId = this.data.groupId;
      this.postSrv.createPost(
        this.createForm.value,
        (res: any) => {
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
}
