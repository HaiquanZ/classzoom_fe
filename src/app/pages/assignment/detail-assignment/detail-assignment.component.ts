import { Component, OnInit } from '@angular/core';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DetailSubTaskComponent } from '../detail-sub-task/detail-sub-task.component';
import { UpdateAssignmentComponent } from '../update-assignment/update-assignment.component';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { CreateTaskComponent } from '../create-task/create-task.component';


@Component({
  selector: 'app-detail-assignment',
  templateUrl: './detail-assignment.component.html',
  styleUrls: ['./detail-assignment.component.scss']
})
export class DetailAssignmentComponent {

  modalRefAnt?: NzModalRef;

  onBack(): void {
    console.log('onBack');
  }

  testArr = [1, 2, 3, 4];
  assignmentInfo: any;
  assignmentId: any;
  initLoading = false; // bug
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  foundIndex = -1;
  members: any[] = [];
  loading: boolean = false;
  tasks: any[] = [];
  stepId: any;
  DueTo: any;

  constructor(
    private modalService: NzModalService,
    private postSrv: PostService,
    private route: ActivatedRoute,
    private groupSrv: GroupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.assignmentId = this.route.snapshot.paramMap.get('id');
    this.getMember();
    this.getData();
    if(this.assignmentInfo.steps.length > 1){
      this.DueTo = this.assignmentInfo?.steps[this.assignmentInfo?.steps?.length - 1].end;
    }else{
      this.DueTo = null;
    }
  }

  getData() {
    this.postSrv.getDetailAssignment({ assignmentId: this.assignmentId },
      (res: any) => {
        if (res) {
          this.assignmentInfo = res.data.assignment;
          //get Index òf step
          const currentTime = new Date();
          for (let i = 0; i < res.data.assignment.steps.length; i++) {
            if (currentTime >=  new Date(res.data.assignment.steps[i].start) && currentTime <= new Date(res.data.assignment.steps[i].end)) {
              this.foundIndex = i+1;
              this.stepId = res.data.assignment.steps[i].id;
              this.getTask(res.data.assignment.steps[i].id);
              break;
            }
            if (i == (this.assignmentInfo.steps.length - 1) && currentTime > new Date(res.data.assignment.steps[i].end)) {
              this.foundIndex = i+2;
            }
          }
        }
      }
    )
  }

  getMember(){
    this.groupSrv.getMemberByPost({postId: this.assignmentId},
      (res: any) => {
        if(res){
          this.members = res.data.members;
        }
      }
    )
  }

  getTask(stepId: any){
    this.loading = true;
    this.postSrv.getTask({stepId: stepId},
      (res: any) => {
        if(res){
          this.tasks = res.data.tasks;
          //handle matching
          for(let i=0; i < this.tasks.length;i++){
            let tmp = this.members.find((item: any) => item.id == this.tasks[i].pic);
            this.tasks[i].namePic = tmp.name;
            this.tasks[i].avtPic = tmp.avt;
            tmp = this.members.find((item: any) => item.id == this.tasks[i].task_giver);
            this.tasks[i].nameTG = tmp.name;
            this.tasks[i].avtTG = tmp.avt;
          }

          this.loading = false;
        }
      }
    )
  }


  edit(data: any): void {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Detail task',
      nzContent: DetailSubTaskComponent,
      nzFooter: null,
      nzData: {info: data, members: this.members},
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.getTask(this.stepId);
      }
    })
  }

  changeTimeline(data: any) {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Change timeline',
      nzContent: UpdateAssignmentComponent,
      nzFooter: null,
      nzData: {steps: this.assignmentInfo.steps, id: this.assignmentInfo.info.id},
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.getData();
      }
    })
  }

  changeStep(e: any){
    this.getTask(e);
    this.stepId = e;
  }

  createTask(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Create task',
      nzContent: CreateTaskComponent,
      nzFooter: null,
      nzData: {stepId: this.stepId, members: this.members},
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.changeStep(this.stepId);
      }
    })
  }

  viewDetail(){
    this.router.navigate(['/assignment/progress/' + this.assignmentId]);
  }
}
