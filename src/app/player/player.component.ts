import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let watch = this.activatedRoute.snapshot.params['watch'];
    console.log(watch);

    // TODO: get video from api
    // REQUIREMENT: wait for networking to be able calling api (WIP)
  }

}
