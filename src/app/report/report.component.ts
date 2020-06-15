import { Component, OnInit, Input } from '@angular/core';
import {DataService} from "../../data.service";
import {PrintService} from "../print.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 data: any = null;

  constructor(private db: DataService, private ps: PrintService) { }

  ngOnInit() {
    this.data = this.db.getData();
    this.ps.onDataReady();
    console.log(JSON.stringify(this.data))


  }

}