import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form-service';

@Component({
  selector: 'app-corporate-details',
  templateUrl: './corporate-details.component.html',
  styleUrls: ['./corporate-details.component.scss']
})
export class CorporateDetailsComponent implements OnInit {

  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      legalStructure: ['', Validators.required],
      revenue: ['', Validators.required],
      commerialRegister: ['', Validators.required]
    });
    this.formService.stepReady(this.step, 'two');
  }

  ngOnInit() {
  }

}

