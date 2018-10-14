import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeServiceService} from "../../services/employee-service/employee-service.service";
import {Department} from "../../model/department";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import {PostDataSource} from "../dashboard-page/dashboard-page.component";

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  departments : Department[];
  genders;
  errorMessage : string;

  constructor(
    private employee : Employee,
    private employeeService : EmployeeServiceService,
    private department : Department,
    private dialogRef: MatDialogRef<EmployeeRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router : Router

  ) { }

  ngOnInit() {
    this.getDepartments();
    this.getGenders();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(employee): void {
    if(employee.firstName != null && employee.lastName != null &&
      employee.gender != null && employee.date != null && employee.department.deptId != null) {
      this.event.emit({data: employee});
      this.dialogRef.close();
    }
  }

  getDepartments(){
    this.employeeService.getDeptDetails()
      .subscribe(
        data => {
          this.departments = data;
        }
      );
  }

  getGenders(){
    this.genders = this.employeeService.getGender();
  }
}
