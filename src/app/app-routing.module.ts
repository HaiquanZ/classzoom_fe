import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RoomComponent } from './pages/room/room.component';
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
    path: 'group',
    loadChildren: () => import('./pages/group/group.module').then((m) => m.GroupModule) 
  },
  {
    path: 'assignment',
    loadChildren: () => import('./pages/assignment/assignment.module').then((m) => m.AssignmentModule)
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
