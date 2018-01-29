import {
  Component,
  AfterViewInit,
  Input,
  Inject,
  ViewChild,
  ElementRef
} from '@angular/core';

import { Post } from './shared/post-token';
import { PostPlatform } from './shared/post.model';
import { PostOptions } from './shared/post-options.model';

@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit {
  /**
   * URL to be shared
   * @type {string}
   * @memberof PostComponent
   */
  @Input()
  public url: string;
  /**
   * Title of page to share include in share post
   * @type {string}
   * @memberof PostComponent
   */
  @Input()
  public title: string;
  /**
   * Po.st widget id
   * @type {string}
   * @memberof PostComponent
   */
  @Input()
  public widgetId: string;
  /**
   * Config options for widget.
   * Equivalent of `pwidget_config` object
   * @type {PostOptions}
   * @memberof PostComponent
   */
  @Input()
  public options: PostOptions = {};
  /**
   * Element to be replaced with share widget
   * @type {ElementRef}
   * @memberof PostComponent
   */
  @ViewChild('widget')
  public widget: ElementRef;
  /**
   * Creates an instance of PostComponent.
   * @param {PostPlatform} postRef
   * @memberof PostComponent
   */
  constructor(@Inject(Post) public postRef: PostPlatform) { }
  /**
   * Initalise post widget
   * @memberof PostComponent
   */
  public ngAfterViewInit(): void {
    this.postRef.createWidget(this.widget.nativeElement, this.options);
  }
}
