import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersontagComponent } from './components/persontag/persontag.component';
import { SeminarboxComponent } from './components/seminarbox/seminarbox.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersontagComponent,
    SeminarboxComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
