import { NgModule, ModuleWithProviders, Provider } from '@angular/core';

import { PostComponent } from './post.component';
import { PostPlatformMock } from './shared/post-mock';
import { Post } from './shared/post-token';

const defaultProviders = [{ provide: Post, useValue: PostPlatformMock }];

/**
 * A simple lightweight library to use Po.st social
 * sharing widgets in Angular apps
 *
 */
@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent]
})
export class PostModule {
  /**
   * Specify a static method for root module to ensure providers
   * are only provided once but allows the module to still be imported
   * into other modules without reproviding services.
   *
   * @memberof PostModule
   */
  static forRoot(
    providers: Provider[] = defaultProviders
  ): ModuleWithProviders {
    return {
      ngModule: PostModule,
      providers: providers
    };
  }
}
