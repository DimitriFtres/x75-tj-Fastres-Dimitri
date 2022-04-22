import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentAddPayload, Document} from "@documents/model";
import {AddressService} from "@org-empl/service/address.service";
import {EmployeeService} from "@org-empl/service/employee.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {
  Address,
  AddressAddPayload,
  Employee,
  EmployeeAddPayload, EmployeeUpdatePayload,
  Organization,
  OrganizationAddPayload, OrganizationUpdatePayload
} from "@org-empl/model";
import {DocumentsRoutingModule} from "@documents/documents.routing.module";
import {DocumentService} from "@documents/service/document.service";
import {Account} from "@auth/model";
import {AccountService} from "@auth/service/account.service";


@Component({
  selector: 'app-add-org-empl',
  templateUrl: './add-org-empl.component.html',
  styleUrls: ['./add-org-empl.component.scss']
})
export class AddOrgEmplComponent implements OnInit {

  employeeAdresses: Address[] = [];
  organizationAddressses: Address[] = [];

  formAddress: FormGroup = new FormGroup({
    type : new FormControl('', []),
    road : new FormControl('', [Validators.required]),
    number : new FormControl('', [Validators.required]),
    box : new FormControl('', [Validators.required]),
    cp : new FormControl('', [Validators.required]),
    town : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
  });

  formOrganization: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    actif : new FormControl('', ),
    addresses : new FormControl('',[])
  });


  formEmployee: FormGroup = new FormGroup({
    role : new FormControl('', [Validators.required]),
    actif : new FormControl('', [Validators.required]),
    account : new FormControl('', [Validators.required]),
    organization : new FormControl('', [Validators.required]),
    addresses : new FormControl('',[])

  });
  constructor(public addressService : AddressService,
              public employeeService : EmployeeService,
              public organizationService : OrganizationService,
              public accountService : AccountService) { }

  ngOnInit(): void {
    this.addressService.getList().subscribe();
    this.employeeService.getList().subscribe();
    this.organizationService.getList().subscribe();
    this.accountService.getList().subscribe();
  }
  submitAddress(){
    this.addressService.create(this.formAddress.value as AddressAddPayload).subscribe();


  }

  submitOrganization() {
    this.formOrganization.value.addresses = this.organizationAddressses;
    this.organizationService.create(this.formOrganization.value as OrganizationAddPayload).subscribe();
  }

  submitEmployee(){
    this.accountService.getDetail(this.formEmployee.value.account).subscribe(account => {
      this.organizationService.getDetail(this.formEmployee.value.organization).subscribe(organization => {
        this.formEmployee.value.account = account;
        this.formEmployee.value.organization = organization;
        this.formEmployee.value.addresses = this.employeeAdresses;
        this.employeeService.create(this.formEmployee.value as EmployeeAddPayload).subscribe();
      })
    })
  }

  modifyAddress($event: Address, form: FormGroup) {
    console.log(form.value);

    if('organization' in form.value)
    {
      this.employeeAdresses = this.employeeAdresses.splice(this.employeeAdresses.indexOf($event), 1);
    }
    else
    {
      this.organizationAddressses = this.organizationAddressses.splice(this.organizationAddressses.indexOf($event), 1);
    }

  }

  addAddress($event: Address, form: FormGroup) {
    console.log(form.value);
    if('organization' in form.value){
      this.employeeAdresses.push($event);
    }
    else
    {
      this.organizationAddressses.push($event);
    }

  }
}
