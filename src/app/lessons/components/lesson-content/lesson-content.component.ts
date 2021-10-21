import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TableOfContent, TocBlock } from 'app/lessons/models/toc.model';
import { LessonsService } from 'app/lessons/services/lessons.service';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit {
  code = `import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="...">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">
    {icon}
  </div>
);`;

  code1 = `function App() {
  return (
    <div className="flex">
    </div>
  );
}`;

  code2 = `const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-900 text-white shadow-lg">
    </div>
  );
};`;

  constructor(private lsService: LessonsService) {}

  ngOnInit(): void {}

  onReady(markdown: MarkdownComponent): void {
    const nodeList = markdown.element.nativeElement.querySelectorAll(
      ':not(a, p, hr, pre, code)',
    );
    const headings = Array.from(nodeList);

    const toc: TableOfContent = this.setIdAndGenerateToc(headings);
    this.lsService.setTableOfContent(toc);
  }

  private setIdAndGenerateToc(headings: Element[]): TableOfContent {
    let toc: TableOfContent = [];

    headings.forEach(h => {
      const title = h.textContent!;
      const dashed = title.toLocaleLowerCase().split(' ').join('-');

      // Set id
      h.setAttribute('id', dashed);

      // Loop over all headings to generate the Table of content
      const isH2 = h.closest('h2');
      if (isH2) {
        const tocBlock: TocBlock = { parent: { title, dashed }, children: [] };
        toc.push(tocBlock);
      } else {
        const tocItem = { title, dashed };
        toc[toc.length - 1].children.push(tocItem);
      }
    });

    return toc;
  }
}
