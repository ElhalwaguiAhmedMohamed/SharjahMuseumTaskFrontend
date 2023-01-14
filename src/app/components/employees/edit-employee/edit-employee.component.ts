import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AddEmployeeRequest } from 'src/app/models/AddEmployeeRequest';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class EditEmployeeComponent {
  @Output() loadEmployees: EventEmitter<any> = new EventEmitter();
  @Input() employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }
  submitted: boolean = false;

  openEdit() {
    this.submitted = false;
    this.employeeDialog = true;
  }

  employeeDialog: boolean = false;

  hideDialog() {
    this.employeeDialog = false;
  }

  editEmployee(employeeObject: any) {
    this.submitted = true;
    this.employeeDialog = false;
    let toBeSent = new AddEmployeeRequest(employeeObject as Employee);
    this.employeeService
      .updateEmployee(toBeSent)
      .subscribe({
        next: (data) => { },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${err}`,
            life: 1000,
          });
          console.log(err);
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
  ngOnInit(): void {
    console.log(this.employee);
  }
}
