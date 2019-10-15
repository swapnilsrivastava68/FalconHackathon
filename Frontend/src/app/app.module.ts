import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanStatusComponent, ApplyLoanComponent, ApplicationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
