import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsResolver } from './resolvers/lessons.resolver';
import { LessonsComponent } from './lessons.component';

const routes: Routes = [
  { path: '', component: LessonsComponent, resolve: [LessonsResolver] },
  {
    path: 'page/:page',
    component: LessonsComponent,
    resolve: [LessonsResolver],
  },
  { path: 'page', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
