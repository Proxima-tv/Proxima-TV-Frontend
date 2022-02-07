import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  @ViewChild('recmmendList')cl:ElementRef;

  constructor(private http:HttpClient,private renderer: Renderer2) { }

  /**
  <a class="card mb-3 col-3" href="premiumplayer.html" style="padding: 0;">
    <img src="poster.jpg"  class="img-fluid rounded-start" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
  </a>
  */

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/videos/recommends').subscribe(data => {
      console.log(data);
      for(let i = 0; i < data.length; i++) {
        // Html declratation
        const link:HTMLAnchorElement = this.renderer.createElement('a');
        const img:HTMLImageElement = this.renderer.createElement('img');
        const cardDiv:HTMLDivElement = this.renderer.createElement('div');
        const vidTitle:HTMLTitleElement = this.renderer.createElement('h5');
        const titleText = this.renderer.createText(data[i]['title']);

        // html assemblyline
        link.appendChild(img);
        img.src = null;
        img.classList.add("img-fluid");
        img.classList.add("rounded-start");
        link.appendChild(cardDiv);
        link.href = "/watch/" + data[i]["vid_id"];
        link.classList.add("card");
        link.classList.add("mb-3");
        link.classList.add("col-3");
        cardDiv.appendChild(vidTitle);
        cardDiv.classList.add("card-body");
        vidTitle.appendChild(titleText);


        // appends to recommendation list
        this.cl.nativeElement.prepend(link);
      }
    
    });
  }



}
