import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { UpdateInfoComponent } from '../update-info/update-info.component';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.scss']
})
export class YourProfileComponent {

  modalRefAnt?: NzModalRef;
  isOtherProfile: boolean = true;

  constructor(
    private modalService: NzModalService,
  ){}

  sizeAvt = 256;
  cover = 'background-image: url(https://media-cdn-v2.laodong.vn/storage/newsportal/2024/3/7/1312582/St.jpg)';
  img = 'https://yt3.googleusercontent.com/v-fHSvLthvdRlrtXeEbWc1JtuKPa7yUeG668kRdxbX6XAxcw_rlhf8wjRGxht_oepo49SkwnXA=s900-c-k-c0x00ffffff-no-rj';

  openUpdate(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Update personal information',
      nzContent: UpdateInfoComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }
}
