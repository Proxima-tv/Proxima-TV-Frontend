import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-stats',
  templateUrl: './watch-stats.component.html',
  styleUrls: ['./watch-stats.component.css']
})
export class WatchStatsComponent implements OnInit {
  title:string;
  clicks:number;
  likes:number;
  dislikes:number;
  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const query = {
      video: this.activatedRoute.snapshot.params['watch']
    };

    let params = new HttpParams()
    .set('stats',JSON.stringify(query));

    this.http.get<any>('http://localhost:3000/videos/stats', {
      params: params
    }).subscribe(data => {
      let resolved = data[0];
      console.log(resolved);
      this.title = resolved['title'];
      this.clicks = resolved['click'];
      this.likes = resolved['likes'];
      this.dislikes = resolved['dislike'];
      // TODO: construct html for the page to load
      // ALSO TODO: determing what data is needed on this exact page
    });
  }
}
