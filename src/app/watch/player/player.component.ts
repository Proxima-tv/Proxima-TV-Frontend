import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  videoLoc:string;
  thumbnail:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

    // TODO: get video from api
    // TODO: Prevent download from videos -> tempfix -> the html itself hides download button
    // REQUIREMENT: wait for networking to be able calling api (WIP)
    // this should use the body but has to revert back to using query strings
    // PROGRESS: the player is able to hotload videolinks and play them

    const vidQuery = {
      video: this.activatedRoute.snapshot.params['watch']
    };

    let params = new HttpParams()
    .set('vidQuery',JSON.stringify(vidQuery));
    this.thumbnail = null;    
    
    this.http.get<any>('http://localhost:3000/videos/video', {
      params: params
    }).subscribe(data => {
      this.videoLoc = data.file;
      this.thumbnail = data.thumbnail;
      this.videoplayer?.nativeElement.load();
    });
  }
}
