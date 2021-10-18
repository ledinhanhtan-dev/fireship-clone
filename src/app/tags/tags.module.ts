import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { SharedModule } from '@shared/shared.module';
import { TagsRoutingModule } from './tags-routing.module';

@NgModule({
  declarations: [TagsComponent],
  imports: [CommonModule, SharedModule, TagsRoutingModule],
})
export class TagsModule {}
