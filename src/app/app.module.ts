import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GithubAppComponent } from './github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GitHubAppComponent } from './components/git-hub-app/git-hub-app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    // GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GitHubAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
