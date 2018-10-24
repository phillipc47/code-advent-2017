import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import {MaterialModule } from './material.module';

import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayOneComponent } from './day-one/day-one.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { NumbersSpacesDirective } from './directives/numbers-spaces.directive';
import { AppConfigService } from './services/app-config/app-config.service';

import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent,
    NumbersSpacesDirective 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    MaterialModule
  ],
  providers: [ 
    AppConfigService, { provide: APP_INITIALIZER, useFactory: (configService: AppConfigService) => () => configService.loadConfigurationData(), deps: [AppConfigService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
