import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch.component';
import { WatchCommentsComponent } from './comments/watch-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    WatchComponent,
    WatchCommentsComponent,
    PlayerComponent,
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ]
})
export class WatchModule { }
