import {
  OnInit,
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { stringHelper } from 'app/helpers/string-helper';
import {
  TableOfContent,
  TocBlock,
  TocItem,
} from 'app/lessons/models/toc.model';
import { LessonsService } from 'app/lessons/services/lessons.service';
import { SNIPPETS } from 'app/lessons/constants/snippets.constants';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit, AfterViewInit {
  @ViewChild('markdown')
  markdownRef!: ElementRef;

  snippets = SNIPPETS;

  constructor(private lsService: LessonsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const markdownEl = this.markdownRef.nativeElement as HTMLDivElement;
    const headings = Array.from(markdownEl.querySelectorAll('h2, h3'));

    const toc: TableOfContent = this.setIdAndGenerateToc(headings);
    this.lsService.setTableOfContent(toc);
  }

  private setIdAndGenerateToc(headings: Element[]): TableOfContent {
    let toc: TableOfContent = [];

    headings.forEach(h => {
      const title = h.textContent!;
      const dashed = stringHelper.toDashCase(title);

      // Set id
      h.setAttribute('id', dashed);

      // Loop over all headings to generate Table of content
      const isH2 = h.closest('h2');
      if (isH2) {
        const tocBlock: TocBlock = { parent: { title, dashed }, children: [] };
        toc.push(tocBlock);
      } else {
        const tocItem: TocItem = { title, dashed };
        toc[toc.length - 1].children.push(tocItem);
      }
    });

    return toc;
  }
}
