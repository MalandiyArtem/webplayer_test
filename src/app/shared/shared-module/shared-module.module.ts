import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { IsIframeDirective } from './directives/is-iframe.directive';
import { IsFullscreenDirective } from './directives/is-fullscreen.directive';
import { MaterialModule } from '../material-module/material.module';
import { ControlDirective } from './directives/control.directive';

@NgModule({
  declarations: [
    FullscreenComponent,
    IsIframeDirective,
    IsFullscreenDirective,
    ControlDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    FullscreenComponent,
    IsIframeDirective,
    IsFullscreenDirective,
    MaterialModule,
    ControlDirective,
  ],
})
export class SharedModule {
}
