import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrganizationService} from "@org-empl/service/organization.service";
import {ActivatedRoute} from "@angular/router";
import {Address, Organization, OrganizationUpdatePayload} from "@org-empl/model";
import {ContactUpdatePayload} from "@contact/model";
import {AddressService} from "@org-empl/service/address.service";

@Component({
  selector: 'app-org-empl-modify-organization',
  templateUrl: './org-empl-modify-organization.component.html',
  styleUrls: ['./org-empl-modify-organization.component.scss']
})
export class OrgEmplModifyOrganizationComponent implements OnInit {
  organization: Organization = {} as Organization;

  formOrganization: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    actif : new FormControl('', [Validators.required]),
  });
  constructor(public organizationService : OrganizationService,
              public addressService : AddressService,
              public route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null)
      this.organizationService.getDetail(id).subscribe(e => {
        this.organization = e;
        this.formOrganization.setValue({
          name : e.name,
          description : e.description,
          actif : e.actif
        })
      });
  }
  submit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null)
    {
      let update = {
        name: this.formOrganization.value.name,
        description: this.formOrganization.value.description,
        actif: this.formOrganization.value.actif,
        organization_id: Number.parseInt(id)
      } as OrganizationUpdatePayload
      this.organizationService.update(update).subscribe();

    }

  }

  modifyAddress($event: Address) {
    this.organization.addresses.splice(this.organization.addresses.indexOf($event), 1);
    let updateContact = {
      organization_id: this.organization.organization_id,
      name: this.formOrganization.value.name,
      description: this.formOrganization.value.description,
      actif: this.formOrganization.value.actif,
      addresses: this.organization.addresses
    } as OrganizationUpdatePayload
    this.organizationService.update(updateContact).subscribe();
  }

  addAddress($event: Address) {
    this.organization.addresses.push($event);
    let updateContact = {
      organization_id: this.organization.organization_id,
      name: this.formOrganization.value.name,
      description: this.formOrganization.value.description,
      actif: this.formOrganization.value.actif,
      addresses: this.organization.addresses
    } as OrganizationUpdatePayload
    this.organizationService.update(updateContact).subscribe();
  }
}
