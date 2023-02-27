import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecordComponent } from './components/record/record.component';
import { SharedModule } from '../../../shared/shared-module/shared-module.module';
import { LcModulePlayerModule } from 'lc-module-player';

@NgModule({
  declarations: [
    RecordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LcModulePlayerModule,
  ],
  bootstrap: [RecordComponent],
})
export class RecordModule { }
