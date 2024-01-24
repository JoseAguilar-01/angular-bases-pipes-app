import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEsUS from '@angular/common/locales/es-US';
import localeEsVE from '@angular/common/locales/es-VE';
import localeFrCa from '@angular/common/locales/fr-CA';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

registerLocaleData(localeEsUS);
registerLocaleData(localeEsVE);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-US',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
