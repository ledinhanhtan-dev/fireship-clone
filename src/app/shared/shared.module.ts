import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import * as c from './components';
import * as p from './pipes';

@NgModule({
  declarations: [c.components, p.pipes],
  imports: [CommonModule, RouterModule, HighlightModule],
  exports: [c.components, p.pipes],
})
export class SharedModule {}
