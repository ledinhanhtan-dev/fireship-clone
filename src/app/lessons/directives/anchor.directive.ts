import { Router } from '@angular/router';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnchor]',
})
export class AnchorDirective implements OnInit {
  @Input() appAnchor!: string;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    const id = this.appAnchor;
    const url = this.router.url;
    const anchorLink = this.el.nativeElement! as HTMLAnchorElement;

    // Set anchor link
    anchorLink.setAttribute('href', url + '#' + id);

    // Add scrolling function
    anchorLink.addEventListener('click', e => {
      e.preventDefault();

      const destinationEl = document.getElementById(id);

      destinationEl?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  }
}
