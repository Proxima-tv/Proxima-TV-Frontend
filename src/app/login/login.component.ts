import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logEmail: any;
  public logPassword: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user = {
      email: this.logEmail,
      password: this.logPassword
    };

    let params = new HttpParams()
    .set('user',JSON.stringify(user));

    // this should use the body but has to revert back to using query strings
    this.http.get<any>('http://localhost:3000/user/login', {
      params: params
    }).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }
}
