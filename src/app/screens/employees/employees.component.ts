import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  goToPage: string = 'employees';
  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  goToEmployeesPage() {
    console.log("hellllllllllllo");
    this.router.navigate(['']);
  }
}
