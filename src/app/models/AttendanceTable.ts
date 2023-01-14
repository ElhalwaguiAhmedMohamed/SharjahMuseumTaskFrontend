import { Device } from "./Device";
import { Employee } from "./Employee";

export class AttendenceTable {
    constructor(public eventLGUID?: number, public srvdt?: Date, public devdt?: string, public devId?: number, public empId?: number, public employee?: Employee, public device?: Device) { }
}