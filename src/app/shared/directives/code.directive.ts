import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[codeHost]',
})
export class CodeDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
