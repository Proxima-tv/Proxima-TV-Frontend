import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from'rxjs/operators';
import { CryptoService } from './crypto.service';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookies:CookiesService
    ) { }

  register(data:object){
    this.http.post('http://localhost:3000/users/register',data, {})
  }
  loggedIn(): boolean{
    let loggin = this.cookies.getCookie("proxima-login-cookie").split(',')    
    return loggin[0] != null && loggin[1] != null;
  }
}
