import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { HighlightModule } from 'ngx-highlightjs';
import { EmbedPipe } from './pipes/embed.pipe';

import * as index from './components';

@NgModule({
  declarations: [LessonsComponent, index.components, EmbedPipe],
  imports: [CommonModule, SharedModule, LessonsRoutingModule, HighlightModule],
})
export class LessonsModule {}
