import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  static isLoggedIn: Boolean;
  username:string;

  constructor( 
    private cookieService: CookiesService,
    private authService: AuthService,
    private router:Router
    ) { }

  isLoggedIn = false;

  ngOnInit(): void {
    console.log(this.authService.loggedIn());
    // checks for login cookie to ensure the proper menu is shown
    this.isLoggedIn = this.authService.loggedIn();
    this.username = this.cookieService.getCookie('proxima-login-cookie').split(',')[0];
  }

  logout(){
    console.log('logout')
    this.cookieService.deleteCookie('proxima-login-cookie');
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}