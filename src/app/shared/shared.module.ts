import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import * as c from './components';
import * as d from './directives';
import * as p from './pipes';

@NgModule({
  declarations: [c.components, p.pipes, d.directives],
  imports: [CommonModule, RouterModule, HighlightModule],
  exports: [c.components, p.pipes, d.directives],
})
export class SharedModule {}
