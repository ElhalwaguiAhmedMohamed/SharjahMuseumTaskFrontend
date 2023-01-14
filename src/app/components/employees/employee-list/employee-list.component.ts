import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class EmployeeListComponent implements OnChanges, OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnChanges(changes: SimpleChanges): void {

  }
  employees: Employee[] = [];
  isChanged: boolean = false;
  ngOnInit(): void {
    this.getEmployees();
  }

  checkChange() {
    this.isChanged = !this.isChanged;
  }
  openNew() { }
  defaultImgSrc = '../../../../assets/defaultUser.jpg';

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data.employees;
      },
      error: (err) => console.log(err),
    });
  }

  filterGlobal($event: any, stringVal: string) {
    console.log($event);
    // this.employees = this.employees.map(e => e.Name?.length!  > 1)
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
    this.getEmployees();
  }

}
