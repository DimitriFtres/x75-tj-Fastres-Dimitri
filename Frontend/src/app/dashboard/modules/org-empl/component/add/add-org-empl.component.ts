import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentAddPayload, Document} from "@documents/model";
import {AddressService} from "@org-empl/service/address.service";
import {EmployeeService} from "@org-empl/service/employee.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {
  Address,
  AddressAddPayload,
  Employee,
  EmployeeAddPayload,
  Organization,
  OrganizationAddPayload
} from "@org-empl/model";
import {DocumentsRoutingModule} from "@documents/documents.routing.module";
import {DocumentService} from "@documents/service/document.service";
import {Account} from "@auth/model";


@Component({
  selector: 'app-add-org-empl',
  templateUrl: './add-org-empl.component.html',
  styleUrls: ['./add-org-empl.component.scss']
})
export class AddOrgEmplComponent implements OnInit {

  addresses!: Address[];
  organizations!: Organization[];
  employees!: Employee[];

  formAddress: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required]),
    road : new FormControl('', [Validators.required]),
    number : new FormControl('', [Validators.required]),
    box : new FormControl('', [Validators.required]),
    cp : new FormControl('', [Validators.required]),
    town : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
    organization : new FormControl('', [Validators.required]),
    employee : new FormControl('', [Validators.required])
  });

  formOrganization: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    actif : new FormControl('', [Validators.required]),
  });


  formEmployee: FormGroup = new FormGroup({
    role : new FormControl('', [Validators.required]),
    actif : new FormControl('', [Validators.required]),
    account : new FormControl('', [Validators.required]),
    organization : new FormControl('', [Validators.required]),
  });
  constructor(public addressService : AddressService,
              public employeeService : EmployeeService,
              public organizationService : OrganizationService) { }

  ngOnInit(): void {
    this.addressService.getList().subscribe(addresses => this.addresses = addresses);
    this.employeeService.getList().subscribe(employees => this.employees = employees);
    this.organizationService.getList().subscribe(organizations => this.organizations = organizations);
  }
  submit(object : any){
    if(this.instanceOfAddress(object))
    {
      this.addressService.create(this.formAddress.value as AddressAddPayload).subscribe(addresses => this.addresses = addresses);
      this.addressService.getList().subscribe(addresses => this.addresses = addresses);
    }
    if(this.instanceOfOrganization(object))
    {
      this.organizationService.create(this.formOrganization.value as OrganizationAddPayload).subscribe(organizations => this.organizations = organizations);
      this.organizationService.getList().subscribe(organizations => this.organizations = organizations);
    }
    if(this.instanceOfEmployee(object))
    {
      this.employeeService.create(this.formEmployee.value as EmployeeAddPayload).subscribe(employees => this.employees = employees);
      this.employeeService.getList().subscribe(employees => this.employees = employees);
    }

  }
  instanceOfAddress(object: any): object is Address {
    return 'cp' in object;
  }
  instanceOfOrganization(object: any): object is Organization {
    return 'description' in object;
  }
  instanceOfEmployee(object: any): object is Employee {
    return '' in object;
  }
}
