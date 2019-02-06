import { PostOptions } from './post-options.model';

export interface PostPlatform {
  createWidget: (selector: string | HTMLElement, options?: PostOptions) => void;
  updateWidget: (selector: string | HTMLElement, options?: PostOptions) => void;
  createCounter: (
    selector: string | HTMLElement,
    options?: PostOptions,
  ) => void;
  init: (selector: string | HTMLElement) => void;
}
