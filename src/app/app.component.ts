import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FileComponent } from './elements/file/file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fireship';

  constructor(private injector: Injector) {
    const FileElement = createCustomElement(FileComponent, { injector });
    customElements.define('file-element', FileElement);
  }

  ngOnInit(): void {}
}
