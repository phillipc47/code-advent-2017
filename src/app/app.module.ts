import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule } from './material.module';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayOneComponent } from './day-one/day-one.component';

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
