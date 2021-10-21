import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { HighlightModule } from 'ngx-highlightjs';

import * as index from './components';
import { AnchorDirective } from './directives/anchor.directive';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LessonsComponent, AnchorDirective, index.components],
  imports: [
    CommonModule,
    SharedModule,
    LessonsRoutingModule,
    HighlightModule,
    MarkdownModule.forChild(),
  ],
})
export class LessonsModule {}
