import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployeeRequest } from '../models/AddEmployeeRequest';
import { Employee } from '../models/Employee';
import { GetAllEmployeesResponse } from '../models/GetAllEmployeesResponse';
import { GetEmployeeByIdRequest } from '../models/GetEmployeeByIdRequest';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private httpClient: HttpClient) { }
    BASE_URL = "https://localhost:7017/api/Employees"

    getAllEmployees(): Observable<GetAllEmployeesResponse> {
        return this.httpClient.post<GetAllEmployeesResponse>(`${this.BASE_URL}/GetAllEmployees`, {});
    }

    getEmployeeById(request: GetEmployeeByIdRequest): Observable<Employee> {
        return this.httpClient.post<Employee>(`${this.BASE_URL}/GetEmployeeById`, request);
    }

    addEmployee(request: AddEmployeeRequest) {
        return this.httpClient.post(`${this.BASE_URL}/AddEmployee`, request);
    }

    updateEmployee(request: AddEmployeeRequest) {
        console.log(request);
        return this.httpClient.post(`${this.BASE_URL}/UpdateEmployee`, request);
    }

    deleteEmployee(id: number) {
        let request = {
            EmployeeId: id
        }
        return this.httpClient.post(`${this.BASE_URL}/DeleteEmployee`, request);
    }
}
