import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './screens/employees/employees.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { GMapModule } from 'primeng/gmap';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { TokenAuthInterceptor } from './interceptors/token-auth.interceptor';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DeleteEmployeeComponenet } from './components/employees/delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeeFormComponent } from './components/employees/employee-form/employee-form.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AttendanceTableComponent } from './components/attendence/attendance-table/attendance-table.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginComponent,
    MainLayoutComponent,
    EmployeesComponent,
    EmployeeListComponent,
    DeleteEmployeeComponenet,
    AddEmployeeComponent,
    EmployeeFormComponent,
    EditEmployeeComponent,
    AttendanceTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TableModule,
    ToastModule,
    ButtonModule,
    StyleClassModule,
    DividerModule,
    AccordionModule,
    RippleModule,
    SelectButtonModule,
    SplitterModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    ConfirmDialogModule,
    BadgeModule,
    ToolbarModule,
    DialogModule,
    RadioButtonModule,
    PasswordModule,
    GMapModule,
    RatingModule,
    InputNumberModule,
    CardModule,
    CarouselModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
