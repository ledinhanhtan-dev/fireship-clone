import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { SharedModule } from '@shared/shared.module';
import { TagsRoutingModule } from './tags-routing.module';
import { TagPageComponent } from './components/tag-page/tag-page.component';

@NgModule({
  declarations: [TagsComponent, TagPageComponent],
  imports: [CommonModule, SharedModule, TagsRoutingModule],
})
export class TagsModule {}
