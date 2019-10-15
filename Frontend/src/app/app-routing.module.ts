import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavComponent } from './components/main-nav/main-nav.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';


const routes: Routes = [
  { path: '', component: ApplyLoanComponent },
  { path: 'app-apply-loan', component: ApplyLoanComponent },
  { path: 'app-loan-status', component: LoanStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
