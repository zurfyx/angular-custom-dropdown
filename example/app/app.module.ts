import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DropdownModule } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    DropdownModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
