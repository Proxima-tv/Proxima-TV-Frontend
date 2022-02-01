import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
})
export class PlayerModule { }
