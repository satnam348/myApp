// // auth.service.ts

// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { apiUrls } from '../constant/apiUrls';


// @Injectable()
// export class AuthService {

//     constructor(private http: Http) { }

//     authRequest() {



//         var headers = new Headers();

//         headers.append('Content-Type', 'application/x-www-form-urlencoded');

//         var credentials = "grant_type=client_credentials"
//             +"&client_id=hV6lfg3EBAiVX5EZjbpexLoLhGhuGiWR"

//         /* etc. */
//         let body = JSON.stringify(apiUrls.credentials.global);
//         this.http.post(apiUrls.credentials.authorization, credentials, { headers: headers })
//             .map(res => res.json())
//             .subscribe(
//             data => localStorage.setItem('access_token', data.access_token),
//             error => console.log(error)
//             );
//     }
// }

