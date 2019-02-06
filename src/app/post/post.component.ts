import {
  Component,
  AfterViewInit,
  Input,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { Post } from './shared/post-token';
import { PostPlatform } from './shared/post.model';
import { PostOptions } from './shared/post-options.model';

/**
 * @example
 * ```
 * <sn-post
 *   [widgetId]="'REPLACE_WITH_WIDGET_ID'"
 *   [url]="'https://foo.com'"
 *   [title]="'Home page'"
 *   [options]="{
 *     buttons: [
 *       { id: 'twitter' },
 *       { id: 'linkedin' },
 *       { id: 'facebook' }
 *     ],
 *     label: false,
 *     radius: 'square'
 *   }">
 * </sn-post>
 * ```
 *
 */
@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements AfterViewInit {
  /**
   * URL to be shared
   * @memberof PostComponent
   */
  @Input() public url: string;
  /**
   * Title of page to share include in share post
   * @memberof PostComponent
   */
  @Input() public title: string;
  /**
   * Po.st widget id
   * @memberof PostComponent
   */
  @Input() public widgetId: string;
  /**
   * Config options for widget.
   * Equivalent of `pwidget_config` object
   * @memberof PostComponent
   */
  @Input() public options: PostOptions = {};
  /**
   * Element to be replaced with share widget
   * @memberof PostComponent
   */
  @ViewChild('widget') public widget: ElementRef;
  /**
   * Creates an instance of PostComponent.
   * @memberof PostComponent
   */
  constructor(@Inject(Post) private postRef: PostPlatform) {}
  /**
   * Initalise post widget
   * @memberof PostComponent
   */
  public ngAfterViewInit(): void {
    if (this.postRef) {
      this.postRef.createWidget(this.widget.nativeElement, this.options);
    }
  }
}
