import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TRANSLATIONS, LOCALE_ID, TRANSLATIONS_FORMAT } from '@angular/core';

import { AppComponent } from './app.component';

import { I18n } from '@ngx-translate/i18n-polyfill';
declare const require;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        locale = locale || 'en-US'; // default to english if no locale provided
        return require(`raw-loader!../locale/messages.${locale}.xlf`);
      },
      deps: [LOCALE_ID]
    },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    // locale id that you're using (default en-US)
    { provide: LOCALE_ID, useValue: 'en-US' },
    // optional, defines how error will be handled
    //{provide: MISSING_TRANSLATION_STRATEGY, useValue: MissingTranslationStrategy.Error},
    I18n
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
