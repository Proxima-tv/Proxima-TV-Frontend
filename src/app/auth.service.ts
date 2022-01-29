import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from'rxjs/operators';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data:object){
    this.http.post('http://localhost:3000/users/register',data, {})
  }
  login(data:object){}
}
