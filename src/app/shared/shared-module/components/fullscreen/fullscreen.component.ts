import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullscreenService } from '../../services/fullscreen.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
})
export class FullscreenComponent implements OnInit, OnDestroy {
  compNativeElement?: HTMLElement;
  isFullScreen = false;
  private subscription: Subscription | undefined;


  constructor(private fullscreenService: FullscreenService) {
    this.compNativeElement = document.documentElement;
  }

  fullscreenToggle(element: any) {
    const doc: any = document;
    if (!doc.fullscreenElement && !doc.webkitIsFullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => {
          this.fullscreenService.setIsFullScreen(true);
          this.isFullScreen = true;
        });
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen().then(() => {
          this.fullscreenService.setIsFullScreen(true);
          this.isFullScreen = true;
        });
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen().then(() => {
          this.fullscreenService.setIsFullScreen(false);
          this.isFullScreen = false;
        });
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen().then(() => {
          this.fullscreenService.setIsFullScreen(false);
          this.isFullScreen = false;
        });
      }
    }
  }

  ngOnInit(): void {
    this.subscription = this.fullscreenService.getIsFullScreen().subscribe((state) => {
      this.isFullScreen = state;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
