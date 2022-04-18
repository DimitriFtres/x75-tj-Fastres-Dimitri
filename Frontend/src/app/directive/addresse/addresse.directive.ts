import {Directive, ElementRef, Input} from '@angular/core';
import {Address} from "@org-empl/model";

@Directive({
  selector: '[appAddresse]'
})
export class AddresseDirective {
  @Input('appAddresse') address!: Address;
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.value = this.address.address_id;

    this._elementRef.nativeElement.innerHTML = this.address.road + " " +
      this.address.number + ", " + this.address.town + "\r\n" + this.address.cp + " " + this.address.country;
  }
}
