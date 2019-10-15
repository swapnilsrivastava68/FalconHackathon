import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form-service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      extraName: ''
    });
    this.formService.stepReady(this.step, 'one')
  }

  change(title) {
    this.step.patchValue({ extraName: title })
  }
  ngOnInit() {
  }

}
