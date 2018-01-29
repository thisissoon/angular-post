import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlatformMock } from './shared/post-mock';
import { PostComponent } from './post.component';
import { Post } from './shared/post-token';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  let postPlatformMock;
  let spy;

  beforeEach(async(() => {
    postPlatformMock = PostPlatformMock;
    spy = spyOn(postPlatformMock, 'createWidget');

    TestBed.configureTestingModule({
      providers: [
        { provide: Post, useValue: postPlatformMock }
      ],
      declarations: [ PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create widgets', () => {
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalled();
  });
});
