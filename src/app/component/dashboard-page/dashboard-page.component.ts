import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import {EmployeeRegistrationComponent} from "../employee-registration/employee-registration.component";
import {EmployeeServiceService} from "../../services/employee-service/employee-service.service";
import {Observable} from 'rxjs/observable';
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  successMessage : string;
  constructor(public dialog: MatDialog, private emplService: EmployeeServiceService) {
  }

  displayedColumns = ['fname', 'lname', 'gender', 'date', 'department', 'delete'];
  dataSource = new PostDataSource(this.emplService);

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(EmployeeRegistrationComponent, {
      width: '600px'
    });


    dialogRef.componentInstance.event.subscribe((result) => {
      this.emplService.createUser(result.data).subscribe(
        data => {
          this.successMessage = "Data Created Successfully";
        });
      this.dataSource = new PostDataSource(this.emplService);
    });

  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: EmployeeServiceService) {
    super();
  }

  connect(): Observable<Employee[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
