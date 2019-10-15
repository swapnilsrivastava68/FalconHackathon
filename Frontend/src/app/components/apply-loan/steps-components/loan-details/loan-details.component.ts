import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form-service';
import { SharedService } from 'src/app/services/shared.service';

interface Usage {
  id: number,
  name: string
}
@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  step: FormGroup
  otherUsage: string = '';
  usageList: Array<Usage> = [];
  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService,
    private sharedService: SharedService
  ) {
    this.step = this._formBuilder.group({
      amount: ['', Validators.required],
      term: ['', Validators.required],
      usage: ['', Validators.required]
    });
    this.formService.stepReady(this.step, 'one');
  }

  ngOnInit() {
    this.sharedService.getUsages().subscribe(usages => {
      this.usageList = usages;
    }, error => {

    });
  }

  nextClicked() { }

  currencyEntered(val) { }

}
