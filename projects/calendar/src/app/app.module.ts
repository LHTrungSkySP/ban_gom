import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
