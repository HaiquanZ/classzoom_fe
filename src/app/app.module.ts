import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
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
    CreateAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
