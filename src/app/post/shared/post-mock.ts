import { PostPlatform } from './post.model';
import { PostOptions } from './post-options.model';

/**
 * An implemenation of the post library to be used
 * as a dummy when running on a server
 */
export const PostPlatformMock: PostPlatform = {
  createWidget: (selector: string | HTMLElement, options: PostOptions) => null,
  updateWidget: (selector: string | HTMLElement, options: PostOptions) => null,
  createCounter: (selector: string | HTMLElement, options: PostOptions) => null,
  init: (selector: string | HTMLElement) => null,
};
