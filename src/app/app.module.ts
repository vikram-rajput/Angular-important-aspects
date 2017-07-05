
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { ListComponent } from './components/list/list.component';

import { ListService } from './services/list.service';



@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ComponentExampleComponent,
    ListComponent
  ],
  providers:[ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
