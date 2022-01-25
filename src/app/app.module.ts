import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryandcommentsComponent } from './historyandcomments/historyandcomments.component';
import { StatsComponent } from './stats/stats.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { CommentsComponent } from './comments/comments.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'stats', component: StatsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HistoryandcommentsComponent,
    StatsComponent,
    TaskbarComponent,
    CommentsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
