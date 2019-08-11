import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-qualification-form-array',
  templateUrl: './reactive-qualification-form-array.component.html',
  styleUrls: ['./reactive-qualification-form-array.component.css']
})
export class ReactiveQualificationFormArrayComponent implements OnInit {

  formModelValue = '';

  qualificationArrayItems: {
    qualificationNumber: number,
    exam: string,
    board: string,
    percentage: number,
    yearOfPassing: number
  }[];

  constructor(private fb: FormBuilder) { }

  qulificationProfileForm = this.fb.group({

    firstName: ['', [Validators.minLength(3), Validators.maxLength(6)]],
    lastName: ['', [Validators.minLength(3), Validators.maxLength(6)]],
    percentage: ['', [Validators.maxLength(50)]],
    // Without FormArray Validation
    // qualificationArray : this.fb.array([])
    // With FormArray Validation
    qualificationArray: this.fb.array([this.qualificationFormGroup()])
  });

  qualificationFormGroup():FormGroup {
    return this.fb.group({

    qualificationNumber: ['',Validators.required],
    exam:  ['',[Validators.required]],
    board: ['',[Validators.required, Validators.maxLength(15)]],
    percentage: ['',[Validators.required]],
    yearOfPassing: ['',[Validators.required]],
    });
  }
  
  ngOnInit() {

    this.qualificationArrayItems = [];

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.qulificationProfileForm.value);
    this.formModelValue = JSON.stringify(this.qulificationProfileForm.value);
  }

  get qualificationArray() {
    return this.qulificationProfileForm.get('qualificationArray') as FormArray;
  }

  get firstName() {
    return this.qulificationProfileForm.get('firstName');
  }

  get lastName() {
    return this.qulificationProfileForm.get('lastName');
  }

  get percentage() {
    return this.qulificationProfileForm.get('percentage');
  }

  get board() {
    return this.qulificationProfileForm.get('board');
  }

  addQualification() {
    this.qualificationArray.push(
      this.fb.group(
        {
          qualificationNumber: [''],
          exam: [''],
          board: [''],
          percentage: [''],
          yearOfPassing: ['']
        }
      )
    );
  }


}
