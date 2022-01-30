import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const query = {
      query: this.activatedRoute.snapshot.params['query']
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

}
