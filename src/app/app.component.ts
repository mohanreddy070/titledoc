import { Component } from '@angular/core';
import { PrintService } from './print.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(public printService: PrintService) { }
}
