import { Component, OnInit } from '@angular/core';
import { BarModel } from './minimalist-chart/BarModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  bars: BarModel[];

  ngOnInit() {
    // initialize the bars asynchronously
    setTimeout(_ => {
      this.bars = [{
        value: 10,
        cssClass: ""
      }, {
        value: 8,
        cssClass: ""
      }, {
        value: 3,
        cssClass: ""
      }];
    }, 1500);

    // initialize the bars asynchronously
    setTimeout(_ => {

      // number of bars between 100 and 200, inclusive
      let count:number = Math.floor(Math.random() * 101) + 100;

      let newBars:BarModel[] = [];
      while(count-- ){

        //random value between 0 and 50
        let value:number = Math.floor(Math.random() * 51);
        newBars.push({
          value: value
        });
      }
      this.bars = newBars;
    }, 5000);

  }
}
