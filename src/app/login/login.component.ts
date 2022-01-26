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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user = {
      username: this.logEmail,
      password: this.logPassword
    };

    console.log(CryptoService.encrypt(JSON.stringify(user)));
  }
}
