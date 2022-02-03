import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-watch-comments',
  templateUrl: './watch-comments.component.html',
  styleUrls: ['./watch-comments.component.css']
})
export class WatchCommentsComponent implements OnInit {

  commentContent:any;

  constructor() { }

  ngOnInit(): void {
  }

  sendComment(){
    console.log(this.commentContent);
  }
}
