import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagPageComponent } from './components/tag-page/tag-page.component';
import { TagResolver } from './resolvers/tag.resolver';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  { path: '', component: TagsComponent },
  { path: ':tagName', component: TagPageComponent, resolve: [TagResolver] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
