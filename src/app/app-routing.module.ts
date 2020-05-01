import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FormComponent } from './form/form.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', component:  FormComponent},
  { path: 'result', component: ReportComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }