import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { HighlightModule } from 'ngx-highlightjs';

import * as index from './components';
import { AnchorDirective } from './directives/anchor.directive';

@NgModule({
  declarations: [LessonsComponent, AnchorDirective, index.components],
  imports: [CommonModule, SharedModule, HighlightModule, LessonsRoutingModule],
  entryComponents: [],
})
export class LessonsModule {}
