import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostBinding('class.hide') hide: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY >= 400) {
      this.hide = true;
    } else this.hide = false;
  }
}
