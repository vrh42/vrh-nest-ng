import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoFeedComponent } from './video-feed.component';

describe('FeedComponent', () => {
  let component: VideoFeedComponent;
  let fixture: ComponentFixture<VideoFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoFeedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
