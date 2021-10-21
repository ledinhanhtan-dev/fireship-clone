import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafePipe } from './pipes/safe.pipe';

import * as index from './components';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [index.components, SafePipe],
  imports: [CommonModule, RouterModule, HighlightModule],
  exports: [index.components],
})
export class SharedModule {}
