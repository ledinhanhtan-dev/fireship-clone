import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from '@shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsPaginationComponent } from './components/lessons-pagination/lessons-pagination.component';

@NgModule({
  declarations: [LessonsComponent, LessonsPaginationComponent],
  imports: [CommonModule, SharedModule, LessonsRoutingModule],
})
export class LessonsModule {}
