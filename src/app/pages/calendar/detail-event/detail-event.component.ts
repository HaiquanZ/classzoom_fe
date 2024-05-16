import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent {

  notes: any[] = [];

  constructor(
    private modal: NzModalRef<DetailEventComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private authSrv: AuthService,
    private fb: NonNullableFormBuilder,
    private notificationSrv: NotificationService
  ){
    this.data.userId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.authSrv.getNotebyDay(this.data,
      (res: any) => {
        if(res){
          console.log(res.data);
          this.notes = res.data.notes;
          // Object()
        }
      }
    )
  }

  noteForm: FormGroup<{
    type: FormControl<string>;
    content: FormControl<string>;
    time: FormControl<string>;
  }> = this.fb.group({
    type: ['success', [Validators.required]],
    content: ['', [Validators.required]],
    time: [String(this.data.year + '-' + this.data.month + '-' + this.data.day), []]
  });

  createNote(){
    if (this.noteForm.valid) {
      this.authSrv.createNote(this.noteForm.value, (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.modal.close(true);
        }
      })
    } else {
      Object.values(this.noteForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  tabs = [
    {
      name: 'All note',
      icon: 'table'
    },
    {
      name: 'Create note',
      icon: 'edit'
    }
  ];

  close(e: any){
    e.preventDefault();
    this.modal.close();
  }

  deleteNote(id: any){
    this.authSrv.deleteNote({id: id},
      (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.modal.close(true);
        }
      }
    )
  }
}
