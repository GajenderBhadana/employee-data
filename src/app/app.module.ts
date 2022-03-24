import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmplayeeListComponent } from './emplayee-list/emplayee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NovbarComponent } from './novbar/novbar.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmplayeeListComponent,
    AddEmployeeComponent,
    NovbarComponent,
    EmployeeCardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
