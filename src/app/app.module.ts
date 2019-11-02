import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';

const lazyConfig = [
  {
    selector: 'dynel-people-list',
    loadChildren: () =>
      import('./people/people.module').then(m => m.PeopleModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLazyElModule.forRoot(lazyConfig)],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
