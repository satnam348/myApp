
import { apiUrls } from './../../../core/constant/apiUrls';
import { Component, OnInit, Provider , ViewChild, ElementRef} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-template-form ',
  templateUrl: './templateForm.html'

})
export class TemplateFormComponent implements OnInit {
  registerForm: FormGroup;
  testResponse: any;
  @ViewChild('data') mymodel: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstname: ['John', Validators.required],
    lastname: ['Doe', Validators.required],
    address: this.formBuilder.group({
      street: ['Delhi'],
      zip: ['110045'],
      city: ['New Delhi']
    })
  });
}
onSubmit(event) {
console.log(event.value );
console.log(this.mymodel);

}

}
