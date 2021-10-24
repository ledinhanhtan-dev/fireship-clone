import {
  Injector,
  Injectable,
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
} from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CodeComponent } from '../code/code.component';
import { FileComponent } from '../file/file.component';
import { ImgComponent } from '../img/img.component';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  private imgFactory: ComponentFactory<ImgComponent>;
  private fileFactory: ComponentFactory<FileComponent>;
  private codeFactory: ComponentFactory<CodeComponent>;

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.imgFactory =
      this.componentFactoryResolver.resolveComponentFactory(ImgComponent);
    this.fileFactory =
      this.componentFactoryResolver.resolveComponentFactory(FileComponent);
    this.codeFactory =
      this.componentFactoryResolver.resolveComponentFactory(CodeComponent);
  }

  replaceByFileElements(paragraphs: HTMLParagraphElement[]) {
    // Replace for each.
    paragraphs.forEach(p => {
      // Get data from parsed markdown.
      const segments = p.textContent!.split('"');
      const lang = segments[1];
      const name = segments[3];

      // Guard for empty lang or name
      if (!lang || !name) return p.remove();

      // Create custom element (each)
      const fileEl = document.createElement('file-element') as NgElement &
        WithProperties<FileComponent>;

      // Set properties.
      fileEl.lang = lang;
      fileEl.name = name;

      // Wire up the element with Angular.
      const fileRef = this.fileFactory.create(this.injector, [], fileEl);
      this.applicationRef.attachView(fileRef.hostView);

      // Append the ng element after the source element
      // then remove the source element 👏
      p.insertAdjacentElement('afterend', fileEl);
      p.remove();
    });
  }

  replaceByCodeElements(pres: NodeListOf<HTMLPreElement>) {
    // Similar to steps above
    pres.forEach(pre => {
      const code = pre.textContent!;
      const lang = pre.querySelector('code')!.className.split('-')[1];

      const codeEl = document.createElement('code-element') as NgElement &
        WithProperties<CodeComponent>;

      codeEl.code = code;
      codeEl.lang = lang;

      const codeRef = this.codeFactory.create(this.injector, [], codeEl);
      this.applicationRef.attachView(codeRef.hostView);

      pre.insertAdjacentElement('afterend', codeEl);
      pre.remove();
    });
  }

  replaceByImgElements(paragraphs: HTMLParagraphElement[]) {
    // Similar to steps above
    paragraphs.forEach(p => {
      const segments = p.textContent!.split('"');
      const src = segments[1];

      const imgEl = document.createElement('img-element') as NgElement &
        WithProperties<ImgComponent>;

      imgEl.src = src;

      const codeRef = this.codeFactory.create(this.injector, [], imgEl);
      this.applicationRef.attachView(codeRef.hostView);

      p.insertAdjacentElement('afterend', imgEl);
      p.remove();
    });
  }
}
