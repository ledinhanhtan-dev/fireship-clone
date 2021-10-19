import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsResolver } from './resolvers/lessons.resolver';
import { LessonsComponent } from './lessons.component';
import { LessonContentComponent } from './components/lesson-content/lesson-content.component';
import { LessonContentResolver } from './resolvers/lesson-content.resolver';

const routes: Routes = [
  { path: '', component: LessonsComponent, resolve: [LessonsResolver] },
  {
    path: 'page/:page',
    component: LessonsComponent,
    resolve: [LessonsResolver],
  },
  { path: 'page', redirectTo: '' },
  {
    path: ':slug',
    component: LessonContentComponent,
    resolve: [LessonContentResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
