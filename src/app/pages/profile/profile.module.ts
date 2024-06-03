import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourProfileComponent } from './your-profile/your-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AntdModule } from 'src/app/component/antd/antd.module';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    YourProfileComponent,
    UpdateInfoComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
