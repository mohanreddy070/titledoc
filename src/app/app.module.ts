import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { ReportComponent } from './report/report.component';
import {DataService} from'../data.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, FormComponent, ReportComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [DataService]

})
export class AppModule { }
