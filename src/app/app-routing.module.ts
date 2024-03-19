import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { CreateAssignmentComponent } from './pages/assignment/create-assignment/create-assignment.component';
import { DetailAssignmentComponent } from './pages/assignment/detail-assignment/detail-assignment.component';
import { AssignmentListComponent } from './pages/assignment/assignment-list/assignment-list.component';
import { OwnerAssignmentComponent } from './pages/assignment/owner-assignment/owner-assignment.component';
import { RoomComponent } from './pages/room/room.component';
import { ViewAnswerComponent } from './pages/assignment/view-answer/view-answer.component';
import { NotfoundComponent } from './pages/notfound/notfound/notfound.component';

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
      },
      {
        path: 'view/:id',
        component: ViewAnswerComponent
      }
    ]
  },
  {
    path: 'group',
    loadChildren: () => import('./pages/group/group.module').then((m) => m.GroupModule) 
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then((m) => m.CalendarModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
