import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RoomComponent } from './pages/room/room.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { AntdModule } from './component/antd/antd.module';
import { Interceptor } from './interceptors/add-header';
import { ErrorInterceptor } from './interceptors/handle-error';
import { NotfoundComponent } from './pages/notfound/notfound/notfound.component';
import { ColumnHomeComponent } from './component/chart/column-home/column-home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CardModule } from './component/card/card.module';
import { PostComponent } from './component/post/post.component';
import { CommentComponent } from './component/comment/comment.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RoomComponent,
    NotfoundComponent,
    ColumnHomeComponent,
    PostComponent,
    CommentComponent,
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
    AntdModule,
    NgApexchartsModule,
    CardModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
