import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmplayeeListComponent } from './emplayee-list/emplayee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: EmplayeeListComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'employeelist', component: EmplayeeListComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
