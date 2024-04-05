import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnHomeComponent } from './column-home/column-home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LineComponent } from './line/line.component';



@NgModule({
  declarations: [
    ColumnHomeComponent,
    LineComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    ColumnHomeComponent,
    LineComponent
  ]
})
export class ChartModule { }
