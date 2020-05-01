import { Component, OnInit, Input } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 data:any;

  constructor(private db: DataService) { }

  ngOnInit() {
    this.data = this.db.getData();
  }

}