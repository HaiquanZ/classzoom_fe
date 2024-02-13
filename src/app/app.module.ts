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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UpdateGroupComponent } from './pages/group/update-group/update-group.component';
import { CreatePostComponent } from './pages/group/create-post/create-post.component';
import { RoomComponent } from './pages/room/room.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ViewAnswerComponent } from './pages/assignment/view-answer/view-answer.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { AntdModule } from './component/antd/antd.module';
import { Interceptor } from './interceptors/add-header';
import { ErrorInterceptor } from './interceptors/handle-error';

registerLocaleData(vi);

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
    CreatePostComponent,
    RoomComponent,
    ViewAnswerComponent
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
    ReactiveFormsModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:4000/room',
      options: {}
    }),
    NgxDocViewerModule,
    AntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
