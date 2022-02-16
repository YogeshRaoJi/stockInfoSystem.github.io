import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../lib/http.Service';
import { loginModel } from '../Models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  logInFormApi(loginDetail: loginModel): Observable<any> {
    return this.http.post('user/Authenticate', loginDetail)
  }
}
