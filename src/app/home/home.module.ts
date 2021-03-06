import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import * as index from './components';
import { HomeResolver } from './resolvers/home.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: [HomeResolver] },
];

@NgModule({
  declarations: [HomeComponent, index.components],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
