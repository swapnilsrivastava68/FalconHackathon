import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';

const routes: Routes = [
  { path: '', redirectTo: 'loan', pathMatch: 'full'},
  { path: 'loan', component: ApplyLoanComponent },
  { path: 'status', component: ApplicationStatusComponent },
  { path: 'loan-status', component: LoanStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
