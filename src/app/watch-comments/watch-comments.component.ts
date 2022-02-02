import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-comments',
  templateUrl: './watch-comments.component.html',
  styleUrls: ['./watch-comments.component.css']
})
export class WatchCommentsComponent implements OnInit {

  comment:String;

  constructor() { }

  ngOnInit(): void {
  }

  sendComment(){}
}
