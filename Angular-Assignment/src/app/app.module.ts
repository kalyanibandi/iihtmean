import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddemployeesComponent } from './addemployees/addemployees.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddemployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'employees/new',component:EmployeesComponent},
      {path:'employees/5',component:AddemployeesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }