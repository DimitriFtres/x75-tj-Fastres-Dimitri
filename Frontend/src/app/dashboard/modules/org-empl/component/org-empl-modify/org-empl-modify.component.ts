import { Component, OnInit } from '@angular/core';
import {AddressService} from "@org-empl/service/address.service";
import {ActivatedRoute} from "@angular/router";
import {Address, AddressAddPayload, Employee, Organization} from "@org-empl/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressUpdatePayload} from "@org-empl/model/payload/AddressUpdatePayload";
import {Contact} from "@contact/model";

@Component({
  selector: 'app-org-empl-modify',
  templateUrl: './org-empl-modify.component.html',
  styleUrls: ['./org-empl-modify.component.scss']
})
export class OrgEmplModifyComponent implements OnInit {

  address: Address = {} as Address;

  formAddress: FormGroup = new FormGroup({
    type : new FormControl('', []),
    road : new FormControl('', [Validators.required]),
    number : new FormControl('', [Validators.required]),
    box : new FormControl('', [Validators.required]),
    cp : new FormControl('', [Validators.required]),
    town : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
  });

  constructor(public addressService : AddressService,
              public route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null)
      this.addressService.getDetail(id).subscribe(e => this.address = e);
  }

  submit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null)
    {
      let update = {
        type: this.formAddress.value.type,
        road: this.formAddress.value.road,
        number: this.formAddress.value.number,
        box: this.formAddress.value.box,
        cp: this.formAddress.value.cp,
        town: this.formAddress.value.town,
        country: this.formAddress.value.country,
        contact: {} as Contact,
        employee: {} as Employee,
        organization: {} as Organization,
        address_id: Number.parseInt(id)
      } as AddressUpdatePayload
      this.addressService.update(update).subscribe(e =>  this.formAddress.reset());
    }

  }
}
