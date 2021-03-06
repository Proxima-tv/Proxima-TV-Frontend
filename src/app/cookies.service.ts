import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  constructor(private service:CookieService) { }

  /**
   * gets given cookie name
   * @param cookie the cookie to receive name
   * @returns value of cookie
   */
  getCookie(cookie:string){
    return this.service.get(cookie);
  }

  /**
   * get all cookies from browser
   * @returns all cookies 
   */
  getAllCookies() {
    return this.service.getAll();
  }

  deleteCookie(name:string){
    try {
      this.service.delete(name);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * sets specified cookies
   * @param cookieName the name of the cookie to store
   * @param values the value to store inside the cookie
   */
  setCookie(cookieName:string, values:string){
    this.service.set(cookieName, values)
  }
}
