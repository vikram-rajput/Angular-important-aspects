import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<my-component></my-component>
  <h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'vikram'; }
