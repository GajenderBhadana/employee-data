import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emplayee-list',
  templateUrl: './emplayee-list.component.html',
  styleUrls: ['./emplayee-list.component.css'],
})
export class EmplayeeListComponent implements OnInit {
  employees: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
