import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private cookie: CookiesService,
    private http: HttpClient  
  ) { }

  ngOnInit(): void { 
    let cookie = this.cookie.getCookie('proxima-login-cookie');
  
    const query = {
      userID: cookie[2]
    };

    let params = new HttpParams()
    .set('query',JSON.stringify(query));

    this.http.get<any>('http://localhost:3000/videos/search', {
      params: params
    }).subscribe(data => {
      console.log(JSON.stringify(data));
      // TODO: construct html for the page to load
      // ALSO TODO: determing what data is needed on this exact page
    });
  }
  onChange(): void { }
}