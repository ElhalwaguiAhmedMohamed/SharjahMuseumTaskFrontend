import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpAttendanceReport, EmpAttendanceReportResponse } from '../models/AttendanceTable';

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {
    constructor(private httpClient: HttpClient) { }
    BASE_URL = "https://localhost:7017/api/Attendance"

    getAttendanceTable(id: number): Observable<EmpAttendanceReportResponse> {
        let request = {
            "employeeId": id
        }
        return this.httpClient.post<EmpAttendanceReportResponse>(`${this.BASE_URL}/GetAttendanceTable`, request);
    }
}
