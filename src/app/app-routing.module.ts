import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FormComponent } from './form/form.component';
import { ReportComponent } from './report/report.component';
import { PrintComponent} from './print/print.component';

const routes: Routes = [
  { path: '', component:  FormComponent},
  { path: 'result', component: ReportComponent },
   { path: 'print',
    outlet: 'print',
    component: PrintComponent,
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }