import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from  './app.routes';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './component/employee-registration/employee-registration.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import {Employee} from "./model/employee";
import {Department} from "./model/department";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardPageComponent } from './component/dashboard-page/dashboard-page.component';
import {EmployeeServiceService} from "./services/employee-service/employee-service.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    HomePageComponent,
    DashboardPageComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule

  ],
  providers: [Employee, Department, EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
