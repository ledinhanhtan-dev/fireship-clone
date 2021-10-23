import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { AnchorDirective } from './directives/anchor.directive';
import { LessonsComponent } from './lessons.component';
import { HighlightModule } from 'ngx-highlightjs';
import { MarkdownModule } from 'ngx-markdown';

import * as index from './components';

@NgModule({
  declarations: [LessonsComponent, AnchorDirective, index.components],
  imports: [
    CommonModule,
    SharedModule,
    HighlightModule,
    LessonsRoutingModule,
    MarkdownModule,
  ],
  entryComponents: [],
})
export class LessonsModule {}
