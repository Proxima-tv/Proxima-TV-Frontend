import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  static isLoggedIn: Boolean;

  constructor( 
    private cookieService: CookieService,
    private router:Router
    ) { }

  isLoggedIn = false;

  ngOnInit(): void {
    // checks for login cookie to ensure the proper menu is shown
    if(this.cookieService.get('proxima-login-cookie') == "") {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      console.log(this.cookieService.get('proxima-login-cookie'))
    }
  }

  logout(){
    console.log('logout')
    this.cookieService.delete('proxima-login-cookie')
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}