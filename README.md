# SharjahMuseumTask Frontend

THe task is to implement a simple employee crud operation and a report for their attendence and to expose an api to do said.
Allowing admins to login with JWT tokens and to create, update, delete and retrieve eomployees.
Allowing admins to get a report a specific employee attendence.

## Requirements

- Create an employee setup screen and db table to make CRUD operations for �employees� table with columns �EMPID, Name, Email, PhoneNo, And CRUD operations for
- �EmployeeAttendance� with columns �EVETLGUID, SRVDT, DEVDT, DEVUID, EMPID�

## System Arcjitecture

- Used a 3 layer clean architecture to implement the solution
- Implemented repository pattern and Inverion of control.
- Implemented unit of work to make it easier dealing with different entities in the system.

![Architecture](https://v2.angular.io/resources/images/devguide/architecture/overview2.png)

## Authentication & Authorization

- Used JWT scheme to authenticate and authorize

## Technologies

- Angular
- c#
- NET 6 ----> link for backend repo (link to frontend repo (https://github.com/ElhalwaguiAhmedMohamed/SharjahMuseumTask.git))
- EF 7
- SQL Server

## How TO RUN

- download the backend repo.
- The backend application has some migrations to intiate the database you can use the command `update-database` to run the migrations and create the database. you will just need to change the connection string
  of the database.

## Auhtor

[Mohamed Ahmed Elhalwagui](https://github.com/ElhalwaguiAhmedMohamed)
