import { Employee } from "./Employee";

export class GetAllEmployeesResponse {
    constructor(public employees: Employee[]) { }
}