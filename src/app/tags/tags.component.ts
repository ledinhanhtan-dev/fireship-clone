import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TAGS } from '@core/constants/tags.constants';
import { Tag } from '@core/models/tag.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit, OnDestroy {
  private tagsSub!: Subscription;
  tags: Tag[] = TAGS;

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Tags');

    this.tagsSub = this.route.data.subscribe(data => (this.tags = data[0]));
  }

  ngOnDestroy(): void {
    if (this.tagsSub) this.tagsSub.unsubscribe();
  }
}
