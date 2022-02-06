import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from '../cookies.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logEmail: any;
  public logPassword: any;
  constructor(
    private http: HttpClient,
    private cookies: CookiesService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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
    }).subscribe(async data => {
      console.log(JSON.stringify(data));
      this.cookies.setCookie('proxima-login-cookie', `${data['payload']['username']},${data['payload']['email']},${data['payload']['id']},`);
      NavbarComponent.isLoggedIn = true;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/profile']);
      });
    });
  }
}