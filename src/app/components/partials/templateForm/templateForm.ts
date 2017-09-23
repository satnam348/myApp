import { apiUrls } from './../../../core/constant/apiUrls';
import { Component, OnInit, Provider } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { RequestService } from '../../../core/services/requestService';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: ' template-form ',
  templateUrl: './templateForm.html',
  providers: [ RequestService ]
})
export class TemplateFormComponent implements OnInit {
  registerForm: FormGroup;
  testResponse: any;
  constructor(private formBuilder: FormBuilder, public RequestService: RequestService) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstname: ['John', Validators.required],
    lastname: ['Doe', Validators.required],
    address: this.formBuilder.group({
      street: [],
      zip: [],
      city: []
    })
  });
}
 onSubmit(form: FormGroup) {
 var queryUrl = apiUrls.pnrStauts + form.value.address.zip + apiUrls.apikey ;
this.RequestService.getRequest(queryUrl).subscribe(
        data => {
          this.testResponse = data;
          console.log("I CANT SEE DATA HERE: ", this.testResponse);
        }
    );

  }

}
