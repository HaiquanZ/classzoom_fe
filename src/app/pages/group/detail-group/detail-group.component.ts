import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { GroupService } from 'src/app/services/group.service';
import { PostService } from 'src/app/services/post.service';
import { DeleteGroupComponent } from '../delete-group/delete-group.component';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent {

  groupId: any;
  groupInfo: any;
  adminId: any;
  loading: boolean = false;
  postPaging: number = 1;
  listPost: any[] = [];
  isEmptyPost: boolean = false;
  modalRefAnt?: NzModalRef;

  constructor(
    private route: ActivatedRoute,
    private groupSrv: GroupService,
    private postSrv: PostService,
    private modalService: NzModalService,
  ) {
    this.groupId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getData();
    this.getPost(false);
  }

  getData() {
    this.groupSrv.getDetailGroup({ groupId: this.groupId },
      (res: any) => {
        if (res) {
          this.groupInfo = res.data.group;
          let tmp = this.groupInfo.members.find((item: any) => item.isAdmin == true);
          this.adminId = tmp.id;
        }
      }
    )
  }

  getPost(isReload: boolean) {
    if (!this.isEmptyPost || isReload) {
      this.loading = true;
      this.postSrv.getPostByGroupId(
        { groupId: this.groupId, size: 3, page: this.postPaging },
        (res: any) => {
          if (res) {
            res.data.posts.forEach((item: any) => this.listPost.push(item));
            if(res.data.posts.length == 0) this.isEmptyPost = true;
            this.loading = false;
          }
        }
      )
    }
  }

  //handle scroll end page to call API get more posts
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.handleScrollToEnd();
    }
  }

  handleScrollToEnd() {
    this.postPaging++;
    this.getPost(false);
  }

  openModalDelete(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Confirm to delete',
      nzContent: DeleteGroupComponent,
      nzFooter: null,
      nzData: {groupId: this.groupId},
      nzWidth: 600,
      nzCentered: true
    })
  }

  openModalCreate(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Create post',
      nzContent: CreatePostComponent,
      nzFooter: null,
      nzData: {groupId: this.groupId},
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.listPost = [];
        this.postPaging = 1;
        this.getPost(true);
      }
    })
  }
}
