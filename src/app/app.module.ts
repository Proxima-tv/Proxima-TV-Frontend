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
import { SettingsComponent } from './settings/settings.component';
import { WatchComponent } from './watch/watch.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import { SearchModule } from './search/search.module';
=======
import { WatchModule } from './watch/watch.module';
>>>>>>> 53f92096e23045328f1d8657cbdafe1b7a2a44ec

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: StatsComponent },
  { path: 'watch/:watch', component: WatchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:email', component: RegisterComponent },
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
    SettingsComponent,
    FooterComponent,
    HomeComponent,
<<<<<<< HEAD
    
=======
    SearchComponent,
>>>>>>> 53f92096e23045328f1d8657cbdafe1b7a2a44ec
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes),
    SearchModule
=======
    WatchModule,
    RouterModule.forRoot(routes)
>>>>>>> 53f92096e23045328f1d8657cbdafe1b7a2a44ec
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }