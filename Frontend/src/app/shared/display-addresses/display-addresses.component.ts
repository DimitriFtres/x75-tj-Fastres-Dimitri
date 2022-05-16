import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressService} from "@org-empl/service/address.service";
import {Address} from "@org-empl/model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-display-addresses',
  templateUrl: './display-addresses.component.html',
  styleUrls: ['./display-addresses.component.scss']
})
export class DisplayAddressesComponent implements OnInit {
  @Input() addresses: Address[] = [];
  @Output() modifiedAddresses = new EventEmitter<Address>();
  @Output() addAddress = new EventEmitter<Address>();
  isAdd: boolean = false;

  formAdd: FormGroup = new FormGroup({
    address: new FormControl('', [])
    });

  constructor(public addressService : AddressService) { }

  ngOnInit(): void {
    this.addressService.getList().subscribe();
    if (this.addresses.length == 0)
    {
      this.isAdd = true;
    }
  }

  deleteClick(address: Address) {
    this.addresses.forEach((e, index) => {
      if(e == address)
        this.addresses.splice(index, 1);
    });
    this.modifiedAddresses.emit(address);

  }

  addClick() {
    this.addressService.getDetail(this.formAdd.value.address).subscribe(e => {
      if(this.isAdd){
        this.addresses.push(e);
        console.log(this.addresses)
      }
      this.addAddress.emit(e);
    })
  }
}
