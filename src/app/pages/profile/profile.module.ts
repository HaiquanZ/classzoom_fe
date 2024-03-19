import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourProfileComponent } from './your-profile/your-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AntdModule } from 'src/app/component/antd/antd.module';



@NgModule({
  declarations: [
    YourProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AntdModule
  ]
})
export class ProfileModule { }
