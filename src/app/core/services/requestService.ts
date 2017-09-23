import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiUrls } from '../constant/apiUrls';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequestService {
  constructor(public _http: Http) {}


  getRequest(url: any) {
    return this._http.get(url)
        .map(data => {
            data.json();
            // the console.log(...) line prevents your code from working
            // either remove it or add the line below (return ...)
            console.log('I CAN SEE DATA HERE: ', data.json());
            return data.json();
    });
}
}
