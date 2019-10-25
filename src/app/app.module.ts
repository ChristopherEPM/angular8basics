import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first-component/first-component.component';
import { PelisComponent } from './components/pelis/pelis.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PelisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
