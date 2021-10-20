import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavLogoComponent } from './components/navbar/nav-logo/nav-logo.component';
import { NavLinksComponent } from './components/navbar/nav-links/nav-links.component';
import { NavButtonsComponent } from './components/navbar/nav-buttons/nav-buttons.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavLogoComponent,
    NavLinksComponent,
    NavButtonsComponent,

    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, PageNotFoundComponent],
})
export class CoreModule {}
