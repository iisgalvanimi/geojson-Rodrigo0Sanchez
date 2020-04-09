import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBBziB08HlMjutzZvTbJU2cyJGF0-IBl2s'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
