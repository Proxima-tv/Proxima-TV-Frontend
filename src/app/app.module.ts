import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { CommentsComponent } from './comments/comments.component';
import { HistoryComponent } from './history/history.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { QuestionsComponent } from './questions/questions.component';
import { ServicePreviewComponent } from './service-preview/service-preview.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
=======
import { SettingsComponent } from './settings/settings.component';
import { PlayerComponent } from './player/player.component';
import { WatchComponent } from './watch/watch.component';
import { WatchCommentsComponent } from './watch-comments/watch-comments.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
>>>>>>> 8d32bf20e43f2267814146a6c7c9c48613b476fc


const routes: Routes = [
  { path: 'stats', component: StatsComponent },
<<<<<<< HEAD
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent }
=======
  { 
    path: 'watch/:watch',
    component: WatchComponent 
  },
  { path: 'settings', component: SettingsComponent }
>>>>>>> 8d32bf20e43f2267814146a6c7c9c48613b476fc
];

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CommentsComponent,
    HistoryComponent,
    NavbarComponent,
    FormsComponent,
    QuestionsComponent,
    ServicePreviewComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
=======
    SettingsComponent,
    PlayerComponent,
    WatchComponent,
    WatchCommentsComponent,
    RecommendationsComponent
>>>>>>> 8d32bf20e43f2267814146a6c7c9c48613b476fc
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
