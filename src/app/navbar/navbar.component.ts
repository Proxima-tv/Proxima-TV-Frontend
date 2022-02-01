import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  static isLoggedIn: Boolean;

  constructor( private cookieService: CookieService ) { }

  loginSec = '<a href="/login">Login</a> | <a href="/register">Register</a>';
  isLoggedIn = false;

  ngOnInit(): void {
    // checks for login cookie to ensure the proper menu is shown
    if(this.cookieService.get('proxima-user') == "") {
    } else {
      console.log(this.cookieService.get('proxima-login'))
    }
  }

  static setLogin(loggedIn:Boolean) {
    this.isLoggedIn = loggedIn;
  }
}