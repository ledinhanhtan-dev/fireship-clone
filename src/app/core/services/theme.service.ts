import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  loadTheme() {
    const theme = localStorage.getItem('theme');

    console.log(theme);

    if (theme) this.setTheme(theme);
    else {
      this.setTheme('theme-dark');
      this.saveTheme('theme-dark');
    }
  }

  switchTheme() {
    document.body.classList.toggle('theme-light');
    document.body.classList.toggle('theme-dark');

    this.saveTheme(document.body.className);
  }

  private setTheme(theme: string) {
    document.body.className = theme;
  }

  private saveTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }
}
