import {Routes} from '@angular/router';
import { EmployeeRegistrationComponent } from './component/employee-registration/employee-registration.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import {AppComponent} from "./app.component";
import {DashboardPageComponent} from "./component/dashboard-page/dashboard-page.component";

export const AppRoutes: Routes = [
  { path : '', redirectTo:'home', pathMatch : 'full' },
  { path : 'register', component: EmployeeRegistrationComponent },
  { path : 'home', component: HomePageComponent },
  { path : 'dashboard', component: DashboardPageComponent },
];
