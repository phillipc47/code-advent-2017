import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material';
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
    MatTabsModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
