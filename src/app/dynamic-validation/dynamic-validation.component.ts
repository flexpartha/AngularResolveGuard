import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-validation',
  templateUrl: './dynamic-validation.component.html',
  styleUrls: ['./dynamic-validation.component.css']
})
export class DynamicValidationComponent implements OnInit {

  dummyForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.dummyForm = this.fb.group({
      country:['A',Validators.required],
      county:['']
    })

  }

  onCountryChanged(){
    let countrySelected = this.dummyForm.get('country').value;

    if(countrySelected === 'B'){
      this.dummyForm.get('county').setValidators([Validators.required]);
      this.dummyForm.get('county').updateValueAndValidity();
    }
    else{
      this.dummyForm.get('county').clearValidators();
      this.dummyForm.get('county').updateValueAndValidity();
    }
  }

}
