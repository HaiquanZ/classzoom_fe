import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './list-group/list-group.component';
import { DetailGroupComponent } from './detail-group/detail-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { AntdModule } from 'src/app/component/antd/antd.module';
import { GroupRoutingModule } from './group-routing.module';



@NgModule({
  declarations: [
    ListGroupComponent,
    DetailGroupComponent,
    CreateGroupComponent,
  ],
  imports: [
    CommonModule,
    AntdModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
