import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineElement } from 'chart.js';
import { CookiesService } from 'src/app/cookies.service';

@Component({
  selector: 'app-watch-comments',
  templateUrl: './watch-comments.component.html',
  styleUrls: ['./watch-comments.component.css']
})
export class WatchCommentsComponent implements OnInit {
  user = this.cookies.getCookie('proxima-login-cookie').split(/[ ,]+/);
  commentContent:any;
  @ViewChild('commentList')cl:ElementRef;
  constructor( 
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cookies: CookiesService,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {
    const vidQuery = {
      video: this.activatedRoute.snapshot.params['watch']
    };

    let params = new HttpParams()
    .set('video',JSON.stringify(vidQuery));
    
    this.http.get<any>('http://localhost:3000/comments/comments', {
      params: params
    }).subscribe(data => {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
          // Creates HTML elements
          const li: HTMLLinkElement = this.renderer.createElement('li');
          const cardDiv: HTMLDivElement = this.renderer.createElement('div');
          const rowDiv: HTMLDivElement = this.renderer.createElement('div');
          const col5Div: HTMLDivElement = this.renderer.createElement('div');
          const pbDiv: HTMLDivElement = this.renderer.createElement('div');
          const pbImg: HTMLImageElement = this.renderer.createComment('img');
          const col10Div: HTMLDivElement = this.renderer.createElement('div');
          const cardBodyDiv: HTMLDivElement = this.renderer.createElement('div');
          const userH5: HTMLParagraphElement = this.renderer.createElement('h5');
          const commentP: HTMLParagraphElement = this.renderer.createElement('p');

          // creates assets
          const commentText = this.renderer.createText(data[i]['comment']);
          const usernameText = this.renderer.createText(data[i]['author']);

          // html assembly line

          li.appendChild(cardDiv);
          li.style.listStyle = "none";
          cardDiv.appendChild(rowDiv);
          rowDiv.classList.add("row");
          rowDiv.classList.add("g-0");
          rowDiv.appendChild(col5Div);
          col5Div.appendChild(pbDiv);
          col5Div.classList.add("col-md-1");
          pbDiv.appendChild(pbImg);
          pbImg.src = "https://cdn.slpnetwork.de/img/sys/users/Thesteev.png";
          rowDiv.appendChild(col10Div);
          col10Div.appendChild(cardBodyDiv);
          col10Div.classList.add("col-md-10");
          cardBodyDiv.appendChild(userH5);
          userH5.appendChild(usernameText);
          userH5.classList.add("card-title");
          cardBodyDiv.appendChild(commentP);
          cardBodyDiv.classList.add("card-body");
          commentP.appendChild(commentText);
          commentP.classList.add("card-text");

          this.cl.nativeElement.appendChild(li);
        }
    });

  }

  sendComment(){
    // Creates HTML elements
    const li: HTMLLinkElement = this.renderer.createElement('li');
    const cardDiv: HTMLDivElement = this.renderer.createElement('div');
    const rowDiv: HTMLDivElement = this.renderer.createElement('div');
    const col5Div: HTMLDivElement = this.renderer.createElement('div');
    const pbDiv: HTMLDivElement = this.renderer.createElement('div');
    const pbImg: HTMLImageElement = this.renderer.createComment('img');
    const col10Div: HTMLDivElement = this.renderer.createElement('div');
    const cardBodyDiv: HTMLDivElement = this.renderer.createElement('div');
    const userH5: HTMLParagraphElement = this.renderer.createElement('h5');
    const commentP: HTMLParagraphElement = this.renderer.createElement('p');

    // creates assets
    const commentText = this.renderer.createText(this.commentContent);
    const usernameText = this.renderer.createText(this.user[0]);

    // html assembly line

    li.appendChild(cardDiv);
    li.style.listStyle = "none";
    cardDiv.appendChild(rowDiv);
    rowDiv.classList.add("row");
    rowDiv.classList.add("g-0");
    rowDiv.appendChild(col5Div);
    col5Div.appendChild(pbDiv);
    col5Div.classList.add("col-md-1");
    pbDiv.appendChild(pbImg);
    pbImg.src = "https://cdn.slpnetwork.de/img/sys/users/Thesteev.png";
    rowDiv.appendChild(col10Div);
    col10Div.appendChild(cardBodyDiv);
    col10Div.classList.add("col-md-10");
    cardBodyDiv.appendChild(userH5);
    userH5.appendChild(usernameText);
    userH5.classList.add("card-title");
    cardBodyDiv.appendChild(commentP);
    cardBodyDiv.classList.add("card-body");
    commentP.appendChild(commentText);
    commentP.classList.add("card-text");
    console.log(li);

    this.cl.nativeElement.appendChild(li);

    // sends the comment to the server
    this.http.post<any>("http://localhost:3000/comments/comment", {
      body: {
        author: this.user[2],
        comment: this.commentContent,
        profile_id: 0,
        vid_id: this.activatedRoute.snapshot.params['watch']
      }
    }).subscribe(data => {
      console.log(data);
    });
  }
}