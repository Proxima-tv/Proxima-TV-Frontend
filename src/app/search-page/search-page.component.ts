import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @ViewChild('searchList')cl:ElementRef;
  constructor(private http:HttpClient, private rednerer:Renderer2, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        const query = {
          query: this.activatedRoute.snapshot.params['query']
        };
    
        let params = new HttpParams()
        .set('query',JSON.stringify(query));
    
        this.http.get<any>('http://localhost:3000/videos/search', {
          params: params
        }).subscribe(data => {
          console.log(data);

          for(let i = 0; i < data.length; i++) {
            // TODO: construct html for the page to load
            // ALSO TODO: determing what data is needed on this exact page
            const topDiv:HTMLDivElement = this.rednerer.createElement("div");
            const Anchor:HTMLAnchorElement = this.rednerer.createElement("a");
            const div:HTMLDivElement = this.rednerer.createElement("div");
            const Img:HTMLImageElement = this.rednerer.createElement("img");
            const bottomdiv:HTMLDivElement = this.rednerer.createElement("div")
            const title: HTMLTitleElement = this.rednerer.createElement("Title");
            const titleText = this.rednerer.createText(data[i]["title"])

            topDiv.appendChild(Anchor);
            topDiv.classList.add("col-4");
            Anchor.appendChild(div);
            Anchor.href = "/watch/" + data[i]["vid_id"];
            div.appendChild(Img);
            div.classList.add("card");
            div.classList.add("bg-dark");
            div.appendChild(bottomdiv);
            Img.classList.add("card-img");
            bottomdiv.appendChild(title);
            bottomdiv.classList.add("card-img-overlay");
            title.appendChild(titleText)
            title.classList.add("card-title");
            this.cl.nativeElement.prepend(topDiv);
          }
        });
  }

}
