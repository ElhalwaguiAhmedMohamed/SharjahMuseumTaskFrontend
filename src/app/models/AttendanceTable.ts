import { Device } from "./Device";
import { Employee } from "./Employee";

export class EmpAttendanceReportResponse {
    constructor(public empAttendanceReport: EmpAttendanceReport) { }
}
export class EmpAttendanceReport {
    constructor(public rows: Row[]) { }
}

export class Row {
    constructor(public userId?: number, public date?: string, public firstRecordedDateTime?: string, public lastRecordedDateTime?: string) { }
}