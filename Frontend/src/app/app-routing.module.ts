import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';

const routes: Routes = [
  { path: '', component: ApplyLoanComponent },
  { path: 'loan', component: ApplyLoanComponent },
  { path: 'status', component: LoanStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
