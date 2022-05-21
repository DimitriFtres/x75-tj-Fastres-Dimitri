import {Directive, ElementRef, Input} from '@angular/core';
import {Address, Employee} from "@org-empl/model";

@Directive({
  selector: '[appEmployee]'
})
export class EmployeeDirective {
  @Input('appEmployee') employee?: Employee;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    if(this.employee)
    {
      this._elementRef.nativeElement.value = this.employee.employee_id;

      this._elementRef.nativeElement.innerHTML += this.employee.account.firstname + " " +
          this.employee.account.lastname + ", ";
      if(this.employee.addresses)
      {
        this.employee.addresses.forEach(e => {
          this._elementRef.nativeElement.innerHTML +=  e.road + " " + e.town + "\r\n" + e.cp + " " + e.country + " \r\n"
        });
      }
      this._elementRef.nativeElement.innerHTML += "\r\n" + this.employee.role + " " + this.employee.organization.name + ". \r\n";
    }

  }
}
