import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GroupComponent } from './pages/group/group.component';
import { LoginComponent } from './pages/login/login.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailGroupComponent } from './pages/group/detail-group/detail-group.component';
import { CreateGroupComponent } from './pages/group/create-group/create-group.component';
import { CreateAssignmentComponent } from './pages/assignment/create-assignment/create-assignment.component';
import { DetailAssignmentComponent } from './pages/assignment/detail-assignment/detail-assignment.component';
import { GroupListComponent } from './pages/group/group-list/group-list.component';
import { AssignmentListComponent } from './pages/assignment/assignment-list/assignment-list.component';
import { UpdateGroupComponent } from './pages/group/update-group/update-group.component';
import { CreatePostComponent } from './pages/group/create-post/create-post.component';
import { OwnerAssignmentComponent } from './pages/assignment/owner-assignment/owner-assignment.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'group',
    component: GroupComponent,
    children: [
      {
        path:'',
        component: GroupListComponent,
      },
      {
        path: 'detail/:id',
        component: DetailGroupComponent,
      },
      {
        path: 'create',
        component: CreateGroupComponent,
      },
      {
        path:'update/:id',
        component: UpdateGroupComponent,
      },
      {
        path: 'create-post/:id',
        component: CreatePostComponent
      }
    ]
  },
  {
    path: 'assignment',
    component: AssignmentComponent,
    children: [
      {
        path:'',
        component: AssignmentListComponent,
      },
      {
        path: 'create/:id',
        component: CreateAssignmentComponent,
      },
      {
        path: 'detail/:id',
        component: DetailAssignmentComponent,
      },
      {
        path: 'owner/:id',
        component: OwnerAssignmentComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
