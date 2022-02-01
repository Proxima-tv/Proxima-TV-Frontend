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
    if(this.cookieService.get('proxima-login-cookie') == "") {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      console.log(this.cookieService.get('proxima-login-cookie'))
    }

    // checks a variable isLoggedIn to determin UserMenuState
    if(this.isLoggedIn) {
      this.loginSec = `
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="width: 100%;">
              <img src="https://cdn.slpnetwork.de/img/sys/users/Thesteev.png" width="30px" height="30px" style="border-radius: 50%;"> The Steev
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="width: 100%;">
            <li><a class="dropdown-item" href="profile.html">Profile</a></li>
            <li><a class="dropdown-item" href="settings.html">Settings</a></li>
            <li><a class="dropdown-item" href="logout.html" style="color: #e74c3c;" href="#">Logout</a></li>
          </ul>
        </div>  
      `;
    } else {
      this.loginSec = '<a href="/login">Login</a> | <a href="/register">Register</a>';
    }
  }

  static setLogin(loggedIn:Boolean) {
    this.isLoggedIn = loggedIn;
  }
}