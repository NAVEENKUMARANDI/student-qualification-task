import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormBuilder } from '@angular/forms';

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

  qulificationProfileForm = this.fb.group ({

      firstName: [''],
      lastName: [''],
      
      "qualificationArray": this.fb.array([])
    });

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
