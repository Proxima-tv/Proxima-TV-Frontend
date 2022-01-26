import { Component, OnInit } from '@angular/core';
import {Button} from './button';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

  dropdown (fall : Button ){
    this.dropdown;
  } 
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
