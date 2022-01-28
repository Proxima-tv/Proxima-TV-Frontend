import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  email:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['/register/' + this.email]);
  }
}
