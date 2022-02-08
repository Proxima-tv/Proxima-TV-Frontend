import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  username:string;
  name:    string;
  email:   string;
  profile_bio: string;
  profile_pic: string;

  constructor(
    private cookies: CookiesService,
    private http: HttpClient  
  ) { }

  ngOnInit(): void { 
    let cookie = this.cookies.getCookie('proxima-login-cookie').split(",");
    console.log(cookie);
    const query = {
      email: cookie[1]
    };

    let params = new HttpParams()
    .set('user',JSON.stringify(query));

    this.http.get<any>('http://localhost:3000/user/settings', {
      params: params
    }).subscribe(data => {
      let fetched = data[0];
      console.log(fetched);
      // TODO: construct html for the page to load
      // ALSO TODO: determing what data is needed on this exact page
      this.username = fetched["username"];
      this.name     = fetched["name"];
      this.email    = fetched["email"];
      this.profile_bio = fetched["profile_bio"];
      this.profile_pic = fetched["profile_pic"];
    });
  }
  onChange(): void { }
}