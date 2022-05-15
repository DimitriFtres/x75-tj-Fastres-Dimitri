import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Address, Employee, Organization} from "@org-empl/model";
import {AddressService} from "@org-empl/service/address.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {EmployeeService} from "@org-empl/service/employee.service";
import {Contact} from "@contact/model";
import {AddressUpdatePayload} from "@org-empl/model/payload/AddressUpdatePayload";


@Component({
  selector: 'app-list-org-empl',
  templateUrl: './list-org-empl.component.html',
  styleUrls: ['./list-org-empl.component.scss']
})
export class ListOrgEmplComponent implements OnInit {

  constructor(public addressService: AddressService,
              public organizationService: OrganizationService,
              public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.addressService.getList().subscribe();
    this.organizationService.getList().subscribe();
    this.employeeService.getList().subscribe();
  }

  deleteClick(address: Address) {
    address.employee = {} as Employee;
    address.organization = {} as Organization;
    address.contact = {} as Contact;
    this.addressService.deleteAddress(address.address_id.toString()).subscribe();
  }

  deleteClickOrganization(organization: Organization) {
    this.organizationService.deleteOrganization(organization.organization_id.toString()).subscribe()
  }

  deleteClickEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.employee_id.toString()).subscribe()
  }
}
