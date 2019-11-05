import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MinimalistChartModule } from './minimalist-chart/minimalist-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MinimalistChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
