import { isPlatformBrowser } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import {
  Component,
  Inject,
  Injector,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CodeComponent } from './elements/code/code.component';
import { FileComponent } from './elements/file/file.component';
import { ImgComponent } from './elements/img/img.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fireship';

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    if (isPlatformBrowser(platformId)) {
      const elements: any[] = [
        [CodeComponent, 'code-element'],
        [FileComponent, 'file-element'],
        [ImgComponent, 'img-element'],
      ];

      //
      for (const [component, name] of elements) {
        // Convert each component to a custom element.
        const el = createCustomElement(component, { injector: this.injector });

        // Register the custom element with the browser.
        customElements.define(name, el);
      }
    }
  }

  ngOnInit(): void {}
}
