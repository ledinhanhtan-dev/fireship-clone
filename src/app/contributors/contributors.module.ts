import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorsComponent } from './contributors.component';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsResolver } from './resolvers/contributors.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContributorsComponent,
    resolve: [ContributorsResolver],
  },
];

@NgModule({
  declarations: [ContributorsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContributorsModule {}
