import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';

import * as index from './components';
import { EmbedPipe } from './pipes/embed.pipe';
import { LessonAuthorComponent } from './components/lesson-author/lesson-author.component';

@NgModule({
  declarations: [LessonsComponent, index.components, EmbedPipe, LessonAuthorComponent],
  imports: [CommonModule, SharedModule, LessonsRoutingModule],
})
export class LessonsModule {}
