import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../form-service';

@Component({
  selector: 'app-stepper-overview',
  templateUrl: 'stepper-overview.component.html',
  styleUrls: ['stepper-overview.component.scss'],
  providers: [FormService]
})
export class StepperOverviewComponent {

  isLinear = false;
  myForm: Array<string>

  constructor(
    public formService: FormService,
    private fb: FormBuilder
  ) {
    this.myForm = this.formService.mainForm.value
  }

  keys(): Array<string> {
    return Object.keys(this.myForm);
  }
}
