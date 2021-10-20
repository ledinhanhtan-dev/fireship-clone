import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TAGS } from '@core/constants/tags.constants';
import { Tag } from '@core/models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = TAGS;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Tags');
  }
}
