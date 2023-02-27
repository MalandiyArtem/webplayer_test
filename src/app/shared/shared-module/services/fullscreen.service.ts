import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  private isFullScreen = new BehaviorSubject(false);

  methodFromFullscreenService(someNumber: number) {
    /**
     * [This method just for test multiline comment]
     * {I can add this}
     * 'I can add that'
     * And one more time
     */
    return someNumber + 123 * 12 + (35 - 10);
  }
}
