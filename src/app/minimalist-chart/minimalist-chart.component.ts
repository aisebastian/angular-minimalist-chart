import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { BarModel } from './BarModel';

@Component({
  selector: 'app-minimalist-chart',
  templateUrl: './minimalist-chart.component.html',
  styleUrls: ['./minimalist-chart.component.scss']
})
export class MinimalistChartComponent implements OnInit, OnChanges {

  @Input() bars: BarModel[] = null;

  private maxValue = 0;

  constructor() { }

  ngOnInit() {
    this.updateView();
  }

  private reset() {
    this.bars = [];
    this.maxValue = 0;
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes || !changes.bars || !changes.bars.currentValue) {
      this.reset();
    }
    
    this.updateView();
  }

  private updateView() {
    if(!this.bars) {
      this.reset();
    }

    this.bars.forEach(bar => {
      if(this.maxValue < bar.value) {
        this.maxValue = bar.value;
      }
    });
  }
}
