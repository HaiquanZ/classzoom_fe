import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-assignment',
  templateUrl: './detail-assignment.component.html',
  styleUrls: ['./detail-assignment.component.scss']
})
export class DetailAssignmentComponent implements OnInit{
  faArrowLeft = faArrowLeft;
  name: string = '';
  content: string = '';
  dueto: any;
  postId: any;
  file: any;
  statusAssignment: any;

  formData:FormData = new FormData();

  constructor(
    private postSrv: PostService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ){};

  ngOnInit(): void {
      this.postId = this.route.snapshot.paramMap.get('id');
      this.postSrv.getDetailAssignment(this.postId, (res:any) => {
        if(res){
          this.content = res.content;
          this.dueto = res.Assignment.dueto,
          this.name = res.Assignment.name
        }
      })

      this.postSrv.getAnswerOfUser(this.postId, (res: any) => {
        if(res){
          this.statusAssignment = res;
        }
      })
  }

  fileChange(e: any){
    this.file = e.target.files[0];
    //console.log(this.file);
  }

  submitAnswer(){
    if (!this.file){
      this.notificationService.showError("No file uploaded", "Error uploading");
    }else{
      this.formData.append('file', this.file, this.file.name)
      this.postSrv.submitAnswer(this.formData, (res: any) => {
        if(res){
          this.notificationService.showSuccess(res.msg, "Sucesss");
        }
      })
    }
  }
}
