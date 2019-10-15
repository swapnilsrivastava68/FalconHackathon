import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from '../app/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// import './polyfills';

import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
// import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
} from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoanDetailsComponent } from './components/apply-loan/steps-components/loan-details/loan-details.component';
import { CorporateDetailsComponent } from './components/apply-loan/steps-components/corporate-details/corporate-details.component';
import { PersonalDetailsComponent } from './components/apply-loan/steps-components/personal-details/personal-details.component';
import { TextInputComponent } from './components/apply-loan/steps-components/text-input/text-input.component';

import { StepperOverviewComponent } from './components/apply-loan/steps-components/stepper-overview/stepper-overview.component';
// import { StepOneComponent } from './app/step-one/step-one.component';
// import { StepTwoComponent } from './app/step-two/step-two.component'
// import { TextInputComponent } from './app/text-input/text-input.component'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoanStatusComponent,
    ApplyLoanComponent,
    ApplicationStatusComponent,
    StepperOverviewComponent,
    LoanDetailsComponent,
    CorporateDetailsComponent,
    PersonalDetailsComponent,
    TextInputComponent
  ],
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
 
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatStepperModule,
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
