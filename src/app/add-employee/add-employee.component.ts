import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(Form: NgForm) {
    console.log('Congrats, form added');
    console.log(Form);
  }
}
