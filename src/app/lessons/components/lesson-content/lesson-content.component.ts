import {
  OnInit,
  Component,
  QueryList,
  ViewChild,
  ElementRef,
  ViewChildren,
  AfterViewInit,
  ComponentFactoryResolver,
} from '@angular/core';
import { stringHelper } from 'app/helpers/string-helper';
import {
  TableOfContent,
  TocBlock,
  TocItem,
} from 'app/lessons/models/toc.model';
import { MarkdownService } from 'ngx-markdown';
import { LessonsService } from 'app/lessons/services/lessons.service';

import { CodeComponent } from '@shared/components/code/code.component';
import { CodeDirective } from '@shared/directives/code.directive';
import { SNIPPETS } from 'app/lessons/constants/snippets.constants';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit, AfterViewInit {
  snippets = SNIPPETS;

  @ViewChildren(CodeDirective)
  codeHosts!: QueryList<CodeDirective>;

  @ViewChild('markdown')
  markdown!: ElementRef;

  constructor(
    private lsService: LessonsService,
    private mdService: MarkdownService,
    private factory: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const markdownEl = this.markdown.nativeElement as HTMLDivElement;

    this.mdService
      .getSource('http://localhost:3000/md/index.md')
      .subscribe(md => {
        const parsedHtml = this.mdService.compile(md);
        markdownEl.innerHTML = parsedHtml;
        this.onReady(markdownEl);
      });
  }

  onReady(markdownEl: HTMLDivElement): void {
    const headings = Array.from(
      markdownEl.querySelectorAll(':not(a, p, hr, pre, code)'),
    );

    const toc: TableOfContent = this.setIdAndGenerateToc(headings);
    this.lsService.setTableOfContent(toc);

    ///

    const paragraphs = Array.from(markdownEl.querySelectorAll('p'));
    const filteredPs = paragraphs.filter(p => p.innerText.slice(0, 6) === '{{');
    filteredPs.forEach(p => {
      const segments = p.textContent!.split('"');
      const language = segments[1];
      const fileName = segments[3];
      p.remove();
    });

    ///

    this.codeHosts.forEach(codeDirective => this.loadCode(codeDirective));
    console.log(this.codeHosts.length);
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

  private loadCode(code: CodeDirective) {
    const codeCmpFactory = this.factory.resolveComponentFactory(CodeComponent);
    const vcr = code.viewContainerRef;
    vcr.clear();

    const componentRef = vcr.createComponent<CodeComponent>(codeCmpFactory);

    componentRef.instance.code = this.snippets.code1;
    componentRef.instance.fileName = code.fileName;
    componentRef.instance.language = code.language;
  }
}
