import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'tags',
    loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule),
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./lessons/lessons.module').then(m => m.LessonsModule),
  },
  {
    path: 'contributors',
    loadChildren: () =>
      import('./contributors/contributors.module').then(
        m => m.ContributorsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
