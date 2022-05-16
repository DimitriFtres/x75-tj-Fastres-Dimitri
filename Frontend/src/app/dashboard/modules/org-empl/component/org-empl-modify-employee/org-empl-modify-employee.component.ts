import {Address, Employee, EmployeeUpdatePayload} from "@org-empl/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "@org-empl/service/employee.service";
import {AddressService} from "@org-empl/service/address.service";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {AccountService} from "@auth/service/account.service";
import {OrganizationService} from "@org-empl/service/organization.service";


@Component({
  selector: 'app-org-empl-modify-employee',
  templateUrl: './org-empl-modify-employee.component.html',
  styleUrls: ['./org-empl-modify-employee.component.scss']
})
export class OrgEmplModifyEmployeeComponent implements OnInit {
  employee!: Employee;

  formEmployee: FormGroup = new FormGroup({
    role : new FormControl('', [Validators.required]),
    actif : new FormControl('', [Validators.required]),
    account : new FormControl('', [Validators.required]),
    addresses : new FormControl('', []),
    organization : new FormControl('', [Validators.required]),
  });
  constructor(public employeeService : EmployeeService,
              public addressService : AddressService,
              public organizationService : OrganizationService,
              public route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.organizationService.getList().subscribe(e => console.log(e));
    if(id != null)
      this.employeeService.getDetail(id).subscribe(e => {
        this.employee = e;
        this.formEmployee.setValue({
              actif : e.actif,
              role : e.role,
              account : e.account,
              addresses : e.addresses,
              organization : e.organization.organization_id
          })
      });
  }
  submit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null)
    {
      let update = {
        role: this.formEmployee.value.role,
        actif: this.formEmployee.value.actif,
        account: this.formEmployee.value.account,
        addresses: this.formEmployee.value.addresses,
        organization: this.formEmployee.value.organization,
        employee_id: Number.parseInt(id)
      } as EmployeeUpdatePayload
      this.employeeService.update(update).subscribe(e =>  this.formEmployee.reset());
    }

  }

  modifyAddress($event: Address) {
    this.employee.addresses.splice(this.employee.addresses.indexOf($event), 1);
    let updateContact = {
      employee_id: this.employee.employee_id,
      role: this.formEmployee.value.role,
      actif: this.formEmployee.value.actif,
      account: this.formEmployee.value.account,
      organization: this.formEmployee.value.organization,
      addresses: this.employee.addresses
    } as EmployeeUpdatePayload
    this.employeeService.update(updateContact).subscribe();
  }

  addAddress($event: Address) {
    this.employee.addresses.push($event);
    let updateContact = {
      employee_id: this.employee.employee_id,
      role: this.formEmployee.value.role,
      actif: this.formEmployee.value.actif,
      account: this.formEmployee.value.account,
      organization: this.formEmployee.value.organization,
      addresses: this.employee.addresses
    } as EmployeeUpdatePayload
    this.employeeService.update(updateContact).subscribe();
  }
}
