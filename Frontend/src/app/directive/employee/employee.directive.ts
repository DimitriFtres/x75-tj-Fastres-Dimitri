import {Directive, ElementRef, Input} from '@angular/core';
import {Address, Employee} from "@org-empl/model";

@Directive({
  selector: '[appEmployee]'
})
export class EmployeeDirective {
  @Input('appEmployee') employee!: Employee;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.value = this.employee.employee_id;

    this._elementRef.nativeElement.innerHTML += this.employee.account.firstname + " " +
      this.employee.account.lastname + ", " + this.employee.address.road + " " +
      this.employee.address.number + ", " + this.employee.address.town + "\r\n" + this.employee.address.cp + " "
      + this.employee.address.country + "\r\n" + this.employee.role + " " + this.employee.organization.name + " "
      + this.employee.actif + ". \r\n";
  }
}
