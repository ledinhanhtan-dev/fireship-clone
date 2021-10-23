import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CodeComponent } from './elements/code/code.component';
import { FileComponent } from './elements/file/file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fireship';

  constructor(private injector: Injector) {
    const elements: any[] = [
      [CodeComponent, 'code-element'],
      [FileComponent, 'file-element'],
    ];

    //
    for (const [component, name] of elements) {
      // Convert each component to a custom element.
      const el = createCustomElement(component, { injector: this.injector });

      // Register the custom element with the browser.
      customElements.define(name, el);
    }
  }

  ngOnInit(): void {}
}
