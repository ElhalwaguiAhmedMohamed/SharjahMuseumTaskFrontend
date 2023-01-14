import { Component, OnInit } from '@angular/core';
import { AttendenceTable } from 'src/app/models/AttendanceTable';
import { AttendanceService } from 'src/app/services/attendence.service';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent implements OnInit {
  constructor(
    private attendanceService: AttendanceService,
  ) { }
  table: AttendenceTable[] = [];
  ngOnInit(): void {
    this.getAttendanceTable();
  }
  getAttendanceTable() {
    this.attendanceService.getAttendanceTable().subscribe({
      next: (data) => {
        this.table = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completed retrieving attendance table')
    });
  }

}
