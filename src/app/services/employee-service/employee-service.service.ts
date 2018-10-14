import { Injectable } from '@angular/core';
import {Employee} from "../../model/employee";
import {RequestOptions, Request, RequestMethod, Response} from '@angular/http';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {Department} from "../../model/department";


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  gender = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Other', viewValue: 'Other'}
  ];


  departments : Department[];
  ELEMENT_DATA: Employee[];

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers : this.headers });

  constructor(private http : Http) { }

  public createUser(employee : Employee) {
    const url = 'http://localhost:8091/ems/employee/register';
    return this.http.post(url, employee, this.options)
      .pipe(map((response : Response) => {
        response.json();
      }));
  }

  public errorHandler(error : Response){
    return Observable.throw(error || "Service Error");
  }

  getData(): Observable<Employee[]> {
    const url = 'http://localhost:8091/ems/employees';
    return this.http.get(url).pipe(
      map(
        res =>{
          this.ELEMENT_DATA = <Employee[]>res.json();
          return this.ELEMENT_DATA;
        }
      )
    );
  }

  getGender() {
    return this.gender;
  }

   getDeptDetails() : Observable<Department[]> {
    const url = 'http://localhost:8091/ems/departments';
    return this.http.get(url).pipe(
    map(
      res =>{
         this.departments = <Department[]>res.json();
         return this.departments;
      }
    )
  );
 }

}
