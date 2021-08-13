import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: string) {}
  get isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  @ViewChild(PlyrComponent)
  plyr!: PlyrComponent;

  // or get it from plyrInit event
  player!: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: '/assets/static/1.mp4',
      provider: 'html5',
      size: 1080,
    },
    {
      src: '/assets/static/1.mp4',
      provider: 'html5',
      size: 720,
    },
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }
}
