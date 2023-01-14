import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Input() employee: Employee = new Employee();
  @Input() employeeDialog: boolean = false;
  @Output() saveEmployee: EventEmitter<Object> = new EventEmitter();
  @Output() hideDialog: EventEmitter<any> = new EventEmitter();

  @ViewChild('employee', { static: false }) employeeImg: any;
  defaultImgSrc = '../../../../assets/defaultUser.jpg';

  src = 'http://localhost:8000/images/';
  constructor() { }
  submitted: boolean = false;
  ngOnInit(): void {
  }

  save(employee: Employee) {
    this.saveEmployee.emit(employee);
  }
}
