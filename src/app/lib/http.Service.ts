import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginModel } from '../Models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url) : Observable<any>{
      return this.http.get(this.updataUrl(url))
  }

  post(url,body): Observable<any>{
      return this.http.post(this.updataUrl(url),body)
  }
  
  updataUrl(url) : string{
      return environment.origin+'/'+environment.api+'/'+url ;
  }
}