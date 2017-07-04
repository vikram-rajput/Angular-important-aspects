
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ComponentExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
