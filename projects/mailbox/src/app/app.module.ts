import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'abc',
        component: TestComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


