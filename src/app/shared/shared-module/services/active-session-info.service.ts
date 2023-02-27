import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveSessionInfoService {
  private streamLink$ = new ReplaySubject<string>(1);

  setLinkToRecording(link: string) {
    this.streamLink$.next(link);
  }

  getLinkToRecording() {
    return this.streamLink$.asObservable();
  }
}
