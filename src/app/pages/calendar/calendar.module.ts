import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCalendarComponent } from './personal-calendar/personal-calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { AntdModule } from 'src/app/component/antd/antd.module';
import { DetailEventComponent } from './detail-event/detail-event.component';



@NgModule({
  declarations: [
    PersonalCalendarComponent,
    DetailEventComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    AntdModule
  ]
})
export class CalendarModule { }
