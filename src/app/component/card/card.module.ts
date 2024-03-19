import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardAssingmentComponent } from './card-assingment/card-assingment.component';
import { TruncatePipe } from 'src/app/pipe/truncate.pipe';
import { AntdModule } from '../antd/antd.module';

@NgModule({
  declarations: [
    CardGroupComponent,
    CardAssingmentComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    AntdModule
  ],
  exports: [
    CardGroupComponent,
    CardAssingmentComponent
  ]
})
export class CardModule { }
