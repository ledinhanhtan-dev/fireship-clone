import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LessonsResolver } from './resolvers/lessons.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';

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
    component: LessonComponent,
    resolve: [LessonResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
