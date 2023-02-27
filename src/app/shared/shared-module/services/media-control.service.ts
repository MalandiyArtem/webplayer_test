import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaControlService {
  private isMouseOnDocument$ = new BehaviorSubject(false);

  setIsMouseOnDocument(isMouseOnDocument: boolean) {
    this.isMouseOnDocument$.next(isMouseOnDocument);
  }

  getIsMouseOnDocument() {
    return this.isMouseOnDocument$ as Observable<boolean>;
  }

  // This is a simple comment
  // Because I don't know what to write

  /**
   * This is the end of recording
   * I hope it will work
   * I have 2 minutes to do something
   * This is a simple comment it's okay
   */
}
