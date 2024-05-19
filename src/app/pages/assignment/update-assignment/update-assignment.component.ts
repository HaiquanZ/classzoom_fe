import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update-assignment',
  templateUrl: './update-assignment.component.html',
  styleUrls: ['./update-assignment.component.scss']
})
export class UpdateAssignmentComponent {

  dateFormat = 'yyyy/MM/dd';
  dataTime: any;
  nameStep: any;
  data: any;
  isChange = -1;

  constructor(
    private modal: NzModalRef<UpdateAssignmentComponent>,
    @Inject(NZ_MODAL_DATA) public Data: any,
    private notificationSrv: NotificationService,
    private postSrv: PostService
  ){}

  ngOnInit(){
    this.data = this.Data;
  }

  updateTimeline(){
    if(this.isChange == -1){
      this.data.steps.push({
        id: null,
        assignmentId: this.data.id,
        name: this.nameStep,
        no: this.data.steps.length + 1,
        start: this.dataTime[0],
        end: this.dataTime[1]
      })
    }else{
      for(let i=0;i<this.data.steps.length;i++){
        if(this.data.steps[i].id == this.isChange){
          this.data.steps[i].name = this.nameStep;
          this.data.steps[i].start = this.dataTime[0];
          this.data.steps[i].end = this.dataTime[1];
          this.isChange = -1;
          break;
        }
      }
    }
    this.nameStep = '',
      this.dataTime = []
  }

  saveToServer(){
    this.postSrv.updateTimeLine(this.data,
      (res: any) => {
        if(res){
          this.notificationSrv.showSuccess(res.data.message, 'Success');
          this.modal.close(true);
        }
      }
    )
  }

  changePhase(id: any){
    this.isChange = id;
    let tmp = this.data.steps.find((item: any )=> item.id == id);
    this.nameStep = tmp.name;
    this.dataTime = [];
    this.dataTime.push(tmp.start);
    this.dataTime.push(tmp.end);
  }

}
