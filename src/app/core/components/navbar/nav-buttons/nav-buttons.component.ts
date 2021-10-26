import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss'],
})
export class NavButtonsComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onSwitchTheme(themeBtn: HTMLButtonElement) {
    this.themeService.switchTheme();
    themeBtn.blur();
  }
}
