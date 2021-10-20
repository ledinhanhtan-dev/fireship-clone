import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { SharedModule } from '@shared/shared.module';
import { TagsRoutingModule } from './tags-routing.module';
import { TagContentComponent } from './components/tag-content/tag-content.component';

@NgModule({
  declarations: [TagsComponent, TagContentComponent],
  imports: [CommonModule, SharedModule, TagsRoutingModule],
})
export class TagsModule {}
