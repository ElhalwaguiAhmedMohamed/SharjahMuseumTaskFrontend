import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpAttendanceReport, Row } from 'src/app/models/AttendanceTable';
import { AttendanceService } from 'src/app/services/attendence.service';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent implements OnInit {
  constructor(
    private attendanceService: AttendanceService,
    private route: ActivatedRoute
  ) { }
  rows: Row[] = [];
  ngOnInit(): void {
    console.log("hi");
    this.getAttendanceTable();
  }
  getAttendanceTable() {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.attendanceService.getAttendanceTable(id).subscribe({
      next: (data) => {
        this.rows = data.empAttendanceReport.rows;
        console.log(this.rows);
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completed retrieving attendance table')
    });
  }

}
