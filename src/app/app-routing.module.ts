import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';

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
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'contributors',
    loadChildren: () =>
      import('./contributors/contributors.module').then(
        m => m.ContributorsModule,
      ),
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  // { path: '**', redirectTo: 'page-not-found' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
