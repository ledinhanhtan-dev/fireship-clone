import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  switchTheme() {
    document.body.classList.toggle('theme-light');
    document.body.classList.toggle('theme-dark');
  }
}
