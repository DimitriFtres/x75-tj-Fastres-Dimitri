import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Address, Employee, Organization} from "@org-empl/model";
import {AddressService} from "@org-empl/service/address.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {EmployeeService} from "@org-empl/service/employee.service";


@Component({
  selector: 'app-list-org-empl',
  templateUrl: './list-org-empl.component.html',
  styleUrls: ['./list-org-empl.component.scss']
})
export class ListOrgEmplComponent implements OnInit {
  addresses: Address[] = [];
  organizations: Organization[] = [];
  employees: Employee[] = [];
  service$: BehaviorSubject<Address[]> = new BehaviorSubject<Address[]>([]);
  serviceOrganization$: BehaviorSubject<Organization[]> = new BehaviorSubject<Organization[]>([]);
  serviceEmployee$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);

  constructor(public addressService: AddressService,
              public organizationService: OrganizationService,
              public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.addressService.getList().subscribe(addresses => this.addresses = addresses);
  }

  deleteClick(address: Address) {
    this.addressService.deleteAddress(address.address_id.toString()).subscribe()
    this.addressService.getList();
  }

  deleteClickOrganization(organization: Organization) {
    this.organizationService.deleteOrganization(organization.organization_id.toString()).subscribe()
    this.organizationService.getList();
  }

  deleteClickEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.employee_id.toString()).subscribe()
    this.employeeService.getList();
  }
}
