import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DetailSubTaskComponent } from '../detail-sub-task/detail-sub-task.component';
import { UpdateAssignmentComponent } from '../update-assignment/update-assignment.component';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

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

  testArr = [1,2,3,4];

  initLoading = false; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private modalService: NzModalService,
  ) { }

  ngOnInit(): void {
    // this.getData((res: any) => {
    //   this.data = res.results;
    //   this.list = res.results;
    //   this.initLoading = false;
    // });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => {
        this.data = this.data.concat(res.results);
        this.list = [...this.data];
        this.loadingMore = false;
      });
  }

  edit(data: any): void {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Detail sub task',
      nzContent: DetailSubTaskComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }

  changeTimeline(data: any){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Change timeline',
      nzContent: UpdateAssignmentComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }
}
