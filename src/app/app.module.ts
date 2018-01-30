import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostModule } from './post/post.module';
import { Post } from './post/shared/post-token';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PostModule.forRoot([
      { provide: Post, useFactory: (() => window['postPlatform']) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
