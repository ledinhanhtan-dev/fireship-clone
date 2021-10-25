import { OnInit, Component, Input, PLATFORM_ID, Inject } from '@angular/core';
import { stringHelper } from 'app/helpers/string-helper';
import {
  TocItem,
  TocBlock,
  TableOfContent,
} from 'app/lessons/models/toc.model';
import { LessonsService } from 'app/lessons/services/lessons.service';
import { ElementsService } from 'app/elements/services/elements.service';
import { MarkdownComponent } from 'ngx-markdown';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit {
  @Input()
  content!: string;

  constructor(
    private lsService: LessonsService,
    private elService: ElementsService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {}

  onReady(markdown: MarkdownComponent) {
    const markdownEl = markdown.element.nativeElement;

    this.replaceByFileElements(markdownEl);
    this.replaceByCodeElements(markdownEl);
    this.replaceByImgElements(markdownEl);
    this.setIdAndGenerateToc(markdownEl);
  }

  private replaceByFileElements(markdownEl: HTMLElement) {
    const paragraphs = Array.from(markdownEl.querySelectorAll('p'));
    const fileParagraphs = paragraphs.filter(p => {
      return p.textContent!.slice(0, 8) === '{{< file';
    });

    this.elService.replaceByFileElements(fileParagraphs);
  }

  private replaceByImgElements(markdownEl: HTMLElement) {
    const paragraphs = Array.from(markdownEl.querySelectorAll('p'));
    const figureParagraphs = paragraphs.filter(p => {
      return p.textContent!.slice(0, 8) === '{{< figu';
    });

    this.elService.replaceByImgElements(figureParagraphs);
  }

  private replaceByCodeElements(markdownEl: HTMLElement) {
    const pres = markdownEl.querySelectorAll('pre');
    this.elService.replaceByCodeElements(pres);
  }

  private setIdAndGenerateToc(markdownEl: HTMLElement) {
    if (!isPlatformBrowser(this.platformId)) return;

    const headings = markdownEl.querySelectorAll('h2, h3');

    let toc: TableOfContent = [];

    headings.forEach(h => {
      const title = h.textContent!;
      const dashed = stringHelper.toDashCase(title);

      // Set id
      h.setAttribute('id', dashed);

      // Loop over all headings to generate Table of content
      const isH2 = h.closest('h2');
      if (isH2) {
        // Also insert "hr" before each H2 (styling purpose)
        const hrEl = document.createElement('hr');
        isH2.insertAdjacentElement('afterend', hrEl);

        const tocBlock: TocBlock = { parent: { title, dashed }, children: [] };
        toc.push(tocBlock);
      } else {
        const tocItem: TocItem = { title, dashed };
        toc[toc.length - 1].children.push(tocItem);
      }
    });

    this.lsService.setTableOfContent(toc);
  }
}
