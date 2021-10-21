import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appAnchor]',
})
export class AnchorDirective implements OnInit {
  @Input() appAnchor!: string;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    const anchorLink = this.el.nativeElement! as HTMLAnchorElement;

    this.addPlaceholderLink(anchorLink);
    this.addScrollingFunction(anchorLink);
  }

  private addPlaceholderLink(anchorLink: HTMLAnchorElement) {
    const id = this.appAnchor;
    const url = this.router.url;

    anchorLink.setAttribute('href', url + '#' + id);
  }

  private addScrollingFunction(anchorLink: HTMLAnchorElement) {
    const destinationEl = document.getElementById(this.appAnchor);

    anchorLink.addEventListener('click', e => {
      e.preventDefault();

      destinationEl?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  }
}
