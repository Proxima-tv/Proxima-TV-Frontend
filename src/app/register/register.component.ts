import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  name = null;

  constructor(
    private http: HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void { }

  onSubmit(){
    if(this.password == this.password_verify) {
      // TODO check that password matches required complexity

      if(this.firstname != null) this.name += this.firstname;
      if(this.lastname != null) this.name += this.lastname; 

      const user = {
        username: this.username,
        email: this.email,
        password:this.password,
        name: this.name
      }

      // TODO send to auth service to register at the backend
      this.http.post<any>('http://localhost:3000/user/register', user).subscribe(data => {
        console.log(data['success']);
        this.router.navigate(['/login']);
      });
    }
  }
}
