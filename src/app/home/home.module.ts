import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { SharedModule } from '../shared/shared.module';
import { HomeTestimonialComponent } from './components/home-testimonial/home-testimonial.component';
import { HomeCoursesComponent } from './components/home-courses/home-courses.component';
import { HomeLessonsComponent } from './components/home-lessons/home-lessons.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeTestimonialComponent, HomeCoursesComponent, HomeLessonsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
