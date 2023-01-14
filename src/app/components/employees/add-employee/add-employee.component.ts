import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AddEmployeeRequest } from 'src/app/models/AddEmployeeRequest';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AddEmployeeComponent {
  @Output() loadEmployees: EventEmitter<any> = new EventEmitter();
  constructor(
    private patientService: EmployeeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }
  submitted: boolean = false;
  employee: Employee = new Employee();
  employeeDialog: boolean = false;

  openNew() {
    this.submitted = false;
    this.employeeDialog = true;
  }
  hideDialog() {
    this.employeeDialog = false;
  }
  saveEmployee(empObject: any) {
    this.submitted = true;
    this.employeeDialog = false;
    console.log('hi');
    let toBeSent = new AddEmployeeRequest(empObject);
    this.patientService.addEmployee(toBeSent).subscribe({
      next: (data) => {

      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${err}`,
          life: 1000,
        });
      },
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 1000,
        });
        setTimeout(() => {
          this.loadEmployees.emit();
        }, 1000);
      },
    });
  }

  ngOnInit(): void { }
}
