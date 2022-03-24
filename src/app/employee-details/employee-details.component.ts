import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  public empolyeeId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.empolyeeId = this.route.snapshot.params['id'];
  }
}
