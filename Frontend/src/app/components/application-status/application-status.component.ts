import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.scss']
})
export class ApplicationStatusComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
      ];
    })
  );

  applicationFormGroup = this._formBuilder.group({
    applicationNumber: ['', Validators.required],
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _formBuilder: FormBuilder,
    ) {
    }

  ngOnInit() {

  }

  submitApplication() {
      console.log('application form', this.applicationForm.value);
  }

}
