import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostModule } from './post/post.module';
import { Post } from './post/shared/post-token';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule.forRoot([
      { provide: Post, useFactory: () => window['postPlatform'] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
