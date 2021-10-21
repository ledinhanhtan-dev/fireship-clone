import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafePipe } from './pipes/safe.pipe';

import * as index from './components';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  declarations: [index.components, SafePipe, CodeComponent],
  imports: [CommonModule, RouterModule],
  exports: [index.components],
})
export class SharedModule {}
