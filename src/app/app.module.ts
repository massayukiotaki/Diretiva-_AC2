import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioDiretivasAC2Component } from './exercicio-diretivas-ac2/exercicio-diretivas-ac2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioDiretivasAC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
