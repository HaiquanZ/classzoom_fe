import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GroupComponent } from './pages/group/group.component';
import { LoginComponent } from './pages/login/login.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
  },
  {
    path: 'assignment',
    component: AssignmentComponent,
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
