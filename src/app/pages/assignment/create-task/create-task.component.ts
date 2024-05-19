import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  constructor(
    private modal: NzModalRef<CreateTaskComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private fb: NonNullableFormBuilder,
    private notificationSrv: NotificationService,
    private postSrv: PostService
  ){}

  taskForm: FormGroup<{
    name: FormControl<string>;
    pic: FormControl<number>;
    stepId: FormControl<number>;
    dueto: FormControl<any>
  }> = this.fb.group({
    name: ['', [Validators.required]],
    pic: [0, [Validators.required]],
    stepId: [this.data.stepId, []],
    dueto: [null, [Validators.required]]
  });

  createTask(){
    if (this.taskForm.valid) {
      this.postSrv.createTask(this.taskForm.value,
        (res: any) => {
          if(res){
            this.notificationSrv.showSuccess(res.data.message, 'Success');
            this.modal.close(true);
          }
        }
      )
    } else {
      Object.values(this.taskForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  close(e: any){
    e.preventDefault();
    this.modal.close();
  }
}
