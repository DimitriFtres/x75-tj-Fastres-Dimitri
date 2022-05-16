import {Directive, ElementRef, Input} from '@angular/core';
import {Address} from "@org-empl/model";
import {Account} from "@auth/model";

@Directive({
  selector: '[appAccount]'
})
export class AccountDirective {
  @Input('appAccount') account!: Account;
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.value = this.account.account_id;

    this._elementRef.nativeElement.innerHTML += this.account.lastname + " " + this.account.firstname;
  }
}
