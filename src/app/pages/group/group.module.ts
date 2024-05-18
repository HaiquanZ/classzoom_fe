import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './list-group/list-group.component';
import { DetailGroupComponent } from './detail-group/detail-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { AntdModule } from 'src/app/component/antd/antd.module';
import { GroupRoutingModule } from './group-routing.module';
import { CardModule } from 'src/app/component/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { PostAssignmentComponent } from './post-assignment/post-assignment.component';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { CreatePostComponent } from './create-post/create-post.component';



@NgModule({
  declarations: [
    ListGroupComponent,
    DetailGroupComponent,
    CreateGroupComponent,
    PostComponent,
    CommentComponent,
    PostAssignmentComponent,
    DeleteGroupComponent,
    CreatePostComponent,
  ],
  imports: [
    CommonModule,
    AntdModule,
    GroupRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
