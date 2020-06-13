import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FormComponent } from './form/form.component';
import { ReportComponent } from './report/report.component';
import {} from '../print/print.component';

const routes: Routes = [
  { path: '', component:  FormComponent},
  { path: 'result', component: ReportComponent },
   { path: 'print',
    outlet: 'print',
    component: PrintComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }