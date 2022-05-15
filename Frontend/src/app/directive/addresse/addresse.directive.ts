import {Directive, ElementRef, Input} from '@angular/core';
import {Address} from "@org-empl/model";
import {isEmpty} from "rxjs/operators";

@Directive({
  selector: '[appAddresse]'
})
export class AddresseDirective {
  @Input('appAddresse') addresses!: Address[];
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    if(this.addresses)
    {
      this.addresses.forEach(address => {
        this._elementRef.nativeElement.innerHTML += address.road + " " +
          address.number + ", " + address.town + "\r\n" + address.cp + " " + address.country + "\r\n / ";
      });
    }
  }
}
