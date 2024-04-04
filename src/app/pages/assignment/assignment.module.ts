import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAssignmentComponent } from './list-assignment/list-assignment.component';
import { DetailAssignmentComponent } from './detail-assignment/detail-assignment.component';
import { AntdModule } from 'src/app/component/antd/antd.module';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { DetailSubTaskComponent } from './detail-sub-task/detail-sub-task.component';
import { ChartTimelineComponent } from './chart-timeline/chart-timeline.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAssignmentComponent } from './update-assignment/update-assignment.component';



@NgModule({
  declarations: [
    ListAssignmentComponent,
    DetailAssignmentComponent,
    DetailSubTaskComponent,
    ChartTimelineComponent,
    UpdateAssignmentComponent
  ],
  imports: [
    CommonModule,
    AntdModule,
    AssignmentRoutingModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssignmentModule { }
