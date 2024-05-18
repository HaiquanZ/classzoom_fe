import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent {

  constructor(
    private fb: NonNullableFormBuilder,
    @Inject(NZ_MODAL_DATA) public data: any,
    private authSrv: AuthService,
    private modal: NzModalRef<UpdateInfoComponent>,
    private notificationSrv: NotificationService
  ){}

  ngOnInit() {
    this.updateForm.patchValue({
      name: this.data.name,
      bio: this.data.bio,
      phone: this.data.phone == null ? '' : this.data.phone,
      gender: this.data.gender
    })
  }

  updateForm: FormGroup<{
    name: FormControl<string>;
    bio: FormControl<string>;
    phone: FormControl<string>;
    gender: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    bio: ['', []],
    phone: ['', []],
    gender: ['', []]
  });

  update(){
    if (this.updateForm.valid) {
      this.authSrv.updateUser(
        {
          name: this.updateForm.value.name,
          bio: this.updateForm.value.bio,
          phone: this.updateForm.value.phone,
          gender: this.updateForm.value.gender,
          id: this.data.id
        },
        (res: any) => {
          if(res){
            this.modal.close(true);
            this.notificationSrv.showSuccess(res.data.message, 'Success');
          }
        }
      )
    } else {
      Object.values(this.updateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
