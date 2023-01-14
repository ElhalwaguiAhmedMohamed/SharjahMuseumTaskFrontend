import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceTableComponent } from './components/attendence/attendance-table/attendance-table.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { EmployeesComponent } from './screens/employees/employees.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', component: MainLayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/report/:id', component: AttendanceTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
