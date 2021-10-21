import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableOfContent } from 'app/lessons/models/toc.model';
import { LessonsService } from 'app/lessons/services/lessons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-toc',
  templateUrl: './lesson-toc.component.html',
  styleUrls: ['./lesson-toc.component.scss'],
})
export class LessonTocComponent implements OnInit, OnDestroy {
  private tocSub!: Subscription;
  toc: TableOfContent = [];

  constructor(private lsService: LessonsService) {}

  ngOnInit(): void {
    this.tocSub = this.lsService.toc$.subscribe(toc => (this.toc = toc));
  }

  ngOnDestroy(): void {
    if (this.tocSub) this.tocSub.unsubscribe();
  }
}
