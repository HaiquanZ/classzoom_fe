import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { UpdateInfoComponent } from '../update-info/update-info.component';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.scss']
})
export class YourProfileComponent {

  modalRefAnt?: NzModalRef;
  isOtherProfile: boolean = false;
  profileInfo: any;
  userId: any;
  myId: any;
  cover = 'background-image: url(https://i.imgur.com/Hj6VLrM.jpeg)';


  constructor(
    private modalService: NzModalService,
    private authSrv: AuthService,
    private route: ActivatedRoute,
  ) {
    this.myId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.isOtherProfile = (String(this.myId) != String(this.userId));
    this.getData();
  }

  getData() {
    this.authSrv.getInfoUser(this.userId,
      (res: any) => {
        if (res) {
          this.profileInfo = res.data.user;
          this.cover = 'background-image: url(' + this.profileInfo.cover + ');';
        }
      }
    )
  }

  sizeAvt = 256;

  openUpdate() {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Update personal information',
      nzContent: UpdateInfoComponent,
      nzFooter: null,
      nzData: this.profileInfo,
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if (status) {
        this.authSrv.getInfoUser(this.userId,
          (res: any) => {
            if (res) {
              this.profileInfo = res.data.user;
              this.authSrv.saveInfoLogin(this.profileInfo, false);
            }
          }
        )
      }
    })
  }

  openUpload(type: any) {
    if (this.myId == this.userId) {
      this.modalRefAnt = this.modalService.create({
        nzTitle: 'Update Avatar/Cover',
        nzContent: UploadComponent,
        nzFooter: null,
        nzData: { type: type },
        nzWidth: 600,
        nzCentered: true
      })

      this.modalRefAnt.afterClose.subscribe(status => {
        if(status){
          window.location.reload();
        }
      })
    }
  }
}
