import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from'rxjs/operators';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
