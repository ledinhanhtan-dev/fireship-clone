import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
