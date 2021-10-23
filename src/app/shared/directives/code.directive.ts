import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[codeHost]',
})
export class CodeDirective {
  @Input() language!: string;
  @Input() fileName!: string;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
