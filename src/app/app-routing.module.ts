import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'tags',
    loadChildren: () => import('./tags/tags.module').then((m) => m.TagsModule),
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./lessons/lessons.module').then((m) => m.LessonsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
