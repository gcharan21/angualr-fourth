import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  template:`<h2> employee list </h2>
  <ul>
  <li> employee{{name}} </li>
  
  </ul>
  
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public name:string;

public employees = [];



constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
this._employeeService.getEmployees()
.subscribe(data=> this.employees=data)

}

  }


