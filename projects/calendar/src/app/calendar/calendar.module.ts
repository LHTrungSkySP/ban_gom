import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule, Routes } from '@angular/router';



export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: CalendarComponent,
  }
];

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  bootstrap:[CalendarModule]
})
export class CalendarModule { }
