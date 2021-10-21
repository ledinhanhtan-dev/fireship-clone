import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsComponent } from './contributors.component';
import { ContributorLinkComponent } from './components/contributor-link/contributor-link.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { ContributorsResolver } from './resolvers/contributors.resolver';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContributorsComponent,
    resolve: [ContributorsResolver],
  },
  {
    path: ':slug',
    component: ContributorComponent,
    resolve: [ContributorsResolver],
  },
];

@NgModule({
  declarations: [
    ContributorsComponent,
    ContributorLinkComponent,
    ContributorComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ContributorsModule {}
