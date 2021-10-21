import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import {
  HighlightModule,
  HighlightOptions,
  HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          css: () => import('highlight.js/lib/languages/css'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
