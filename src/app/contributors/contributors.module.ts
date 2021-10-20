import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorsComponent } from './contributors.component';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsResolver } from './resolvers/contributors.resolver';
import { ContributorContentComponent } from './components/contributor-content/contributor-content.component';
import { SharedModule } from '@shared/shared.module';
import { ContributorLinkComponent } from './components/contributor-link/contributor-link.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContributorsComponent,
    resolve: [ContributorsResolver],
  },
  {
    path: ':slug',
    component: ContributorContentComponent,
    resolve: [ContributorsResolver],
  },
];

@NgModule({
  declarations: [
    ContributorsComponent,
    ContributorContentComponent,
    ContributorLinkComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ContributorsModule {}
