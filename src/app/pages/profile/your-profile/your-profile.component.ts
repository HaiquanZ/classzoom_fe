import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { UpdateInfoComponent } from '../update-info/update-info.component';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private modalService: NzModalService,
    private authSrv: AuthService,
    private route: ActivatedRoute
  ){
    this.myId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.isOtherProfile = (String(this.myId) != String(this.userId));
    this.authSrv.getInfoUser(this.userId,
      (res: any) => {
        if(res){
          this.profileInfo = res.data.user;
        }
      }
    )
  }

  sizeAvt = 256;
  cover = 'background-image: url(https://media-cdn-v2.laodong.vn/storage/newsportal/2024/3/7/1312582/St.jpg)';
  img = 'https://yt3.googleusercontent.com/v-fHSvLthvdRlrtXeEbWc1JtuKPa7yUeG668kRdxbX6XAxcw_rlhf8wjRGxht_oepo49SkwnXA=s900-c-k-c0x00ffffff-no-rj';

  openUpdate(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Update personal information',
      nzContent: UpdateInfoComponent,
      nzFooter: null,
      nzData: this.profileInfo,
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.authSrv.getInfoUser(this.userId,
          (res: any) => {
            if(res){
              this.profileInfo = res.data.user;
              this.authSrv.saveInfoLogin(this.profileInfo, false);
            }
          }
        )
      }
    })
  }
}
