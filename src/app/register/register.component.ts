import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string;
  password:string;
  password_verify:string;
  email:string;
  firstname = null;
  lastname = null;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(){
    if(this.password == this.password_verify) {
      // TODO check that password matches required complexity
      const user = {
        username: this.username,
        email: this.email,
        password:this.password,
        firstname:this.firstname,
        lastname:this.lastname,
      }
      // TODO send to auth service to register at the backend
    }
  }
}
