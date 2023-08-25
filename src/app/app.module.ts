import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { GroupComponent } from './pages/group/group.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { CreateGroupComponent } from './pages/group/create-group/create-group.component';
import { LoginComponent } from './pages/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailGroupComponent } from './pages/group/detail-group/detail-group.component';
import { DetailAssignmentComponent } from './pages/assignment/detail-assignment/detail-assignment.component';
import { CreateAssignmentComponent } from './pages/assignment/create-assignment/create-assignment.component';
import { GroupListComponent } from './pages/group/group-list/group-list.component';
import { AssignmentListComponent } from './pages/assignment/assignment-list/assignment-list.component';
import { OwnerAssignmentComponent } from './pages/assignment/owner-assignment/owner-assignment.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UpdateGroupComponent } from './pages/group/update-group/update-group.component';
import { CreatePostComponent } from './pages/group/create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GroupComponent,
    AssignmentComponent,
    CreateGroupComponent,
    LoginComponent,
    ProfileComponent,
    DetailGroupComponent,
    DetailAssignmentComponent,
    CreateAssignmentComponent,
    GroupListComponent,
    AssignmentListComponent,
    OwnerAssignmentComponent,
    UpdateGroupComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
