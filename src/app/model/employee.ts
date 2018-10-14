import {Department} from "./department";

export class Employee{
  firstName : string;
  lastName : string;
  gender : string;
  date : Date;
  department = new Department();

  constructor(){}
}
