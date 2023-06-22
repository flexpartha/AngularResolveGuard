import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ageRangeValidator, isNumericOnly, validateAplhaNumeric } from '../shared/custom.validators';
import { ValidateUrl } from '../shared/url.validators';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {

  customForm:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.customForm = this._fb.group({
      usernm:new FormControl('', [Validators.required, validateAplhaNumeric]),
      websiteUrl:new FormControl('', [Validators.required, ValidateUrl]),
      consumerId:new FormControl('', [Validators.required, isNumericOnly]),
      age:new FormControl(null, [ageRangeValidator]),
    })
  }
  saveForm(){
    console.log('Valid?', this.customForm.valid); // true or false
    console.log('Username', this.customForm.value.usernm);
    console.log('Website URL', this.customForm.value.websiteUrl);

  }
}
