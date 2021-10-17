import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { VideoComponent } from './components/video/video.component';
import { ButtonComponent } from './components/button/button.component';
import { SafePipe } from './pipes/safe.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IconComponent, VideoComponent, SafePipe, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [IconComponent, ButtonComponent, VideoComponent],
})
export class SharedModule {}
