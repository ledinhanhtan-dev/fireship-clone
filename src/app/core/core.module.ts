import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { NavLogoComponent } from './components/navbar/nav-logo/nav-logo.component';
import { NavLinksComponent } from './components/navbar/nav-links/nav-links.component';
import { NavButtonsComponent } from './components/navbar/nav-buttons/nav-buttons.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavLogoComponent,
    NavLinksComponent,
    NavButtonsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
