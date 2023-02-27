// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Guid } from 'guid-typescript';
// import { ParentMessageInterface } from '../../../../../shared/interfaces/parentMessage.interface';
// import { AccessValidationService } from '../../../../../shared/shared-module/services/access-validation.service';
// import { ActiveSessionInfoService } from '../../../../../shared/shared-module/services/active-session-info.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FullscreenService } from 'src/app/shared/shared-module/services/fullscreen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  hasAccess = true;
  canJoin = true;
  streamId: Guid = Guid.createEmpty();
  form!: FormGroup;
  value = '';
  valueFromService = 0;

  constructor(
    private accessValidatorService: AccessValidationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private activeSessionService: ActiveSessionInfoService,
    private fullscreenService: FullscreenService,
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const recordLink = params.get('recordLink');
      console.log('Record link: ', recordLink);
      if (recordLink !== null) {
        this.activeSessionService.setLinkToRecording(recordLink);
        this.router.navigate(['/record']);
      }
    });
  }

  ngOnInit(): void {
    window.addEventListener('message', (e: MessageEvent<ParentMessageInterface>) => {
      if (e.data.token) {
        this.hasAccess = this.accessValidatorService.hasAccess(e.data.token);
      }

      if (e.data.recordLink) {
        this.activeSessionService.setLinkToRecording(e.data.recordLink);
        this.router.navigate(['/record']);
      }
    });

    this.form = new FormGroup({
      recordSource: new FormControl('', Validators.required),
    });
  }

  sayHi() {
    console.log('Hi from the button!');
    const resut = this.testMethod(15, 22);
    console.info(resut);
    this.valueFromService = this.fullscreenService.methodFromFullscreenService(resut);

    /**
     * 
     * This no.
     */
  }

  testMethod(arg1: number, arg2: number) {
    if (arg1 > arg2) {
      return arg1 * arg2;
    } else if (arg1 < arg2) {
      return arg1 / arg2
    }
    return 0;
  }

  // join() {
  //   this.router.navigate(['/record']);
  // }

  onSubmit() {
    this.value = this.form.value.recordSource.trim();
    if (this.value.length !== 0) {
      this.activeSessionService.setLinkToRecording(this.value);
      this.router.navigate(['/record']);
    }
  }
}
