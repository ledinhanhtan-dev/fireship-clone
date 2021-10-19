import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsPaginationComponent } from './components/lessons-pagination/lessons-pagination.component';
import { LessonContentComponent } from './components/lesson-content/lesson-content.component';

@NgModule({
  declarations: [LessonsComponent, LessonsPaginationComponent, LessonContentComponent],
  imports: [CommonModule, SharedModule, LessonsRoutingModule],
})
export class LessonsModule {}
