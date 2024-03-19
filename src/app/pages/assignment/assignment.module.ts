import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAssignmentComponent } from './list-assignment/list-assignment.component';
import { DetailAssignmentComponent } from './detail-assignment/detail-assignment.component';
import { AntdModule } from 'src/app/component/antd/antd.module';
import { AssignmentRoutingModule } from './assignment-routing.module';



@NgModule({
  declarations: [
    ListAssignmentComponent,
    DetailAssignmentComponent
  ],
  imports: [
    CommonModule,
    AntdModule,
    AssignmentRoutingModule
  ]
})
export class AssignmentModule { }
