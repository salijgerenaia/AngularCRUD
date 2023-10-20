import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employe-dash board.model';

@Component({
  selector: 'app-employe-dashboard',
  templateUrl: './employe-dashboard.component.html',
  styleUrls: ['./employe-dashboard.component.css']
})
export class EmployeDashboardComponent {

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  constructor(private formbuilber: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      firstName : [' '],
      lastName : [' '],
      email : [' '],
      mobile : [' '],
      salary : [' ']
    })
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      alert("Something Went wrong");
    })
  }

}
