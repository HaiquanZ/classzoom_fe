import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-sub-task',
  templateUrl: './detail-sub-task.component.html',
  styleUrls: ['./detail-sub-task.component.scss']
})
export class DetailSubTaskComponent {

  status= '';
  message = '';
  pic: number = 0;
  time: Date | null = null;

  constructor(
    private modal: NzModalRef<DetailSubTaskComponent>,
    @Inject(NZ_MODAL_DATA) public data: any,
    private notificationSrv: NotificationService,
    private postSrv: PostService
  ){}

  ngOnInit() {
    console.log(this.data);
    this.status = this.data.info.status;
    this.message = this.data.info.message;
    this.time = this.data.info.dueto;
    this.pic = this.data.info.pic;
  }


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  save(){
    let data = {
      status: this.status,
      message: this.message,
      pic: this.pic,
      dueto: this.time,
      id: this.data.info.id
    }

    this.postSrv.updateTask(data,
      (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.modal.close(true);
        }
      }
    )
  }
}
