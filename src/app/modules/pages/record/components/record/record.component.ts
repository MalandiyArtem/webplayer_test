import { Component, OnInit } from '@angular/core';
import { MediaControlService } from '../../../../../shared/shared-module/services/media-control.service';
import { ActiveSessionInfoService } from '../../../../../shared/shared-module/services/active-session-info.service';
import { FullscreenService } from '../../../../../shared/shared-module/services/fullscreen.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  mouseOnDocument = false;
  changeStateOfFullScreen = false;
  recordLink = '';
  gitHubLink = '';

  constructor(
    private mediaControlService: MediaControlService,
    private activeSessionService: ActiveSessionInfoService,
    private fullScreenService: FullscreenService,
  ) { }

  ngOnInit() {
    this.activeSessionService.getLinkToRecording().subscribe((link: string) => {
      this.recordLink = link;
    });

    this.mediaControlService.getIsMouseOnDocument()
      .subscribe((state) => {
        this.mouseOnDocument = state;
      });
  }

  fullScreenHandler(isFullScreen: boolean) {
    this.changeStateOfFullScreen = false;
    this.fullScreenService.setIsFullScreen(isFullScreen);
  }

  gitHubLinkHandler(gitHubLink: string) {
    this.gitHubLink = gitHubLink;
  }

  openGitRepo() {
    this.changeStateOfFullScreen = true;
    window.open(this.gitHubLink, '_blank');
  }
}
