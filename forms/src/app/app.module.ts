import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SairamComponent } from './sairam/sairam.component';
import { SairamDirective } from './sairam.directive';

@NgModule({
  declarations: [
    AppComponent,
    SairamComponent,
    SairamDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
