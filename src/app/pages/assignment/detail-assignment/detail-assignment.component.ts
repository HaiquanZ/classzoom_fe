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
    private postService: PostService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private notificationService: NotificationService
  ){};

  ngOnInit(): void {
      this.postId = this.route.snapshot.paramMap.get('id');
      this.commonService.typeHeader.next('assignment');
      this.postService.getDetailAssignment(this.postId).subscribe(
        (result) => {
          this.content = result.content;
          this.dueto = result.Assignment.dueto,
          this.name = result.Assignment.name
        },
        (err) => {console.log(err);}
      )

      this.postService.getAnswerOfUser(this.postId).subscribe(
        (result) => {
          this.statusAssignment = result;
        },
        (err) => {console.log(err);}
      );
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
      this.postService.submitAnswer(this.formData).subscribe(
        (result) => {
          this.notificationService.showSuccess(result.msg, "Sucesss");
        },
        (err) => {console.log(err);}
      )
    }
  }
}
