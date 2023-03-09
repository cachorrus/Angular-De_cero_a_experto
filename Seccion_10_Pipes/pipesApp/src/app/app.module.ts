import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';
//https://angular.io/api/core/LOCALE_ID
//https://github.com/angular/angular/issues/43824
import '@angular/common/locales/global/es-MX';

//Para usar como locale en los pipes (en esta por defecto)
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/zh';
import '@angular/common/locales/global/nl';

//Cambiar el locale de app (deprecated)
/* import localeEs from '@angular/common/locales/es';
import localeMXExtra from '@angular/common/locales/extra/es-MX';

import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs,'es-MX',localeMXExtra); */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule    
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-MX'} , //Default en-US:  BCP 47 Unicode Common Locale Data Repository (CLDR)
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'MXN'} //Default USD: ISO 4217
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
