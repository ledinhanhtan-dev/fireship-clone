import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagContentComponent } from './components/tag-content/tag-content.component';
import { TagsResolver } from './resolvers/tags.resolver';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  { path: '', component: TagsComponent, resolve: [TagsResolver] },
  { path: ':name', component: TagContentComponent, resolve: [TagsResolver] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
