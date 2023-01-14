import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttendenceTable } from '../models/AttendanceTable';

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {
    constructor(private httpClient: HttpClient) { }
    BASE_URL = "https://localhost:7017/api/Attendance"

    getAttendanceTable(): Observable<AttendenceTable[]> {
        return this.httpClient.post<AttendenceTable[]>(`${this.BASE_URL}/GetAttendanceTable`, {});
    }
}
