import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DataSource} from '@angular/cdk/table';

import {Observable} from 'rxjs/observable';
import {EmployeeServiceService} from "./services/employee-service/employee-service.service";
import {Employee} from "./model/employee";
import {EmployeeRegistrationComponent} from "./component/employee-registration/employee-registration.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WELCOME TO EMPLOYEE MANAGEMENT SYSTEM';

  successMessage : string;
  dataSource = new PostDataSource(this.emplService);

  constructor(public dialog: MatDialog, private emplService: EmployeeServiceService) {
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
