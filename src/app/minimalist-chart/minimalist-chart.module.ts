import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalistChartComponent } from './minimalist-chart.component';



@NgModule({
  declarations: [MinimalistChartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MinimalistChartComponent
  ]
})
export class MinimalistChartModule { }
