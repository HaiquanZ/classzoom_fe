import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DetailEventComponent } from '../detail-event/detail-event.component';
import { AuthService } from 'src/app/services/auth.service';
import { NoteModel } from 'src/app/models/auth-models';

@Component({
  selector: 'app-personal-calendar',
  templateUrl: './personal-calendar.component.html',
  styleUrls: ['./personal-calendar.component.scss']
})
export class PersonalCalendarComponent {

  modalRefAnt?: NzModalRef;
  loading: boolean = true;
  listDataMap: any;
  currentMonth: number = 0;
  currentYear: number = 0;

  constructor(
    private modalService: NzModalService,
    private authSrv: AuthService
  ){
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth();
    this.currentMonth++;
    this.currentYear = currentDate.getFullYear();
  }

  ngOnInit() {
    this.getNoteByMonth(this.currentMonth, this.currentYear);
  }

  getNoteByMonth(month: number, year: number){
    this.loading = true;
    this.authSrv.getNotebyMonth(
      {
        month: month,
        year: year,
        userId: localStorage.getItem('userId')
      },
      (res: any) => {
        if(res){
          this.listDataMap = res.data.notes;
          this.loading = false;
        }
      }
    )
  }

  // listDataMap = {
  //   eight: [
  //     { type: 'warning', content: 'This is warning event.' },
  //     { type: 'success', content: 'This is usual event.' }
  //   ],
  //   ten: [
  //     { type: 'warning', content: 'This is warning event.' },
  //     { type: 'success', content: 'This is usual event.' },
  //     { type: 'error', content: 'This is error event.' }
  //   ],
  //   eleven: [
  //     { type: 'warning', content: 'This is warning event' },
  //     { type: 'success', content: 'This is very long usual event........' },
  //     { type: 'error', content: 'This is error event 1.' },
  //     { type: 'error', content: 'This is error event 2.' },
  //     { type: 'error', content: 'This is error event 3.' },
  //     { type: 'error', content: 'This is error event 4.' }
  //   ]
  // };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  showDetailDay(e: any){
    let yearSelected = e.getFullYear();
    let monthSelected = e.getMonth();
    let daySelected = e.getDate();
    if(yearSelected === this.currentYear && monthSelected === this.currentMonth - 1){
      this.modalRefAnt = this.modalService.create({
        nzTitle: 'Note',
        nzContent: DetailEventComponent,
        nzFooter: null,
        nzData: {day: daySelected, month: monthSelected + 1, year: yearSelected},
        nzWidth: 600,
        nzCentered: true
      })

      this.modalRefAnt.afterClose.subscribe(status => {
        if (status) this.getNoteByMonth(this.currentMonth, this.currentYear);
      })
    }else{
      this.currentMonth = monthSelected + 1;
      this.currentYear = yearSelected;
      this.getNoteByMonth(this.currentMonth, this.currentYear);
    }
  }
}
