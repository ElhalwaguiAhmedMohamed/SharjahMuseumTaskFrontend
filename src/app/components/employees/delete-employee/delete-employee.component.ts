import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class DeleteEmployeeComponenet {
  @Input() employee: Employee = new Employee();
  @Output() loadEmployees: EventEmitter<any> = new EventEmitter();
  constructor(
    private employeeService: EmployeeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit(): void { }

  deleteEmployee(employee: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + employee.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employeeService.deleteEmployee(employee.empId!).subscribe({
          next: () => {
            console.log('Delete done');
          },
          error: (err: any) => console.log(err),
        });
        this.employee = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'medicine Deleted',
          life: 3000,
        });
        setTimeout(() => {
          this.loadEmployees.emit();
        }, 1000);
      },
    });
  }


}
