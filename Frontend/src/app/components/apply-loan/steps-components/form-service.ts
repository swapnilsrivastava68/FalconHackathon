import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormService {

    private stepOneSource: Subject<FormGroup> = new Subject();
    stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();

    private stepTwoSource: Subject<FormGroup> = new Subject();
    stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();

    private stepThreeSource: Subject<FormGroup> = new Subject();
    stepThree: Observable<FormGroup> = this.stepTwoSource.asObservable();

    mainForm: FormGroup = this._formBuilder.group({
        amount: '',
        term: '',
        usage: '',
        companyName: '',
        companyAddress: '',
        legalStructure: '',
        revenue: '',
        commerialRegister: '',
        firstName: '',
        lastName: '',
        personalAddress: '',
        citizenship: '',
        dob: '',
        phone: '',
        email: '',
        passport: ''
    })

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.stepOne.subscribe(form =>
            form.valueChanges.subscribe(val => {
                this.mainForm.value.amount = val.amount;
                this.mainForm.value.term = val.term;
                this.mainForm.value.usage = val.usage;
            })
        )
        this.stepTwo.subscribe(form =>
            form.valueChanges.subscribe(val => {
                this.mainForm.value.companyName = val.companyName;
                this.mainForm.value.companyAddress = val.companyAddress;
                this.mainForm.value.legalStructure = val.legalStructure;
                this.mainForm.value.revenue = val.revenue;
                this.mainForm.value.commerialRegister = val.commerialRegister;
            })
        )
        this.stepThree.subscribe(form =>
            form.valueChanges.subscribe(val => {
                this.mainForm.value.firstName = val.firstName;
                this.mainForm.value.lastName = val.lastName;
                this.mainForm.value.personalAddress = val.personalAddress;
                this.mainForm.value.citizenship = val.citizenship;
                this.mainForm.value.dob = val.dob;
                this.mainForm.value.phone = val.phone;
                this.mainForm.value.email = val.email;
                this.mainForm.value.passport = val.passport;
            })
        )
    }

    stepReady(form: FormGroup, part) {
        switch (part) {
            case 'one': { this.stepOneSource.next(form); }
            case 'two': { this.stepTwoSource.next(form); }
            case 'three': { this.stepThreeSource.next(form); }
        }
    }
}
