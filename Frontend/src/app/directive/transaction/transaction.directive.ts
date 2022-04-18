import {Directive, ElementRef, Input} from '@angular/core';
import {Organization} from "@org-empl/model";
import {Transaction} from "@wallet/model";

@Directive({
  selector: '[appTransaction]'
})
export class TransactionDirective {


  @Input('appTransaction') transaction!: Transaction;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.value = this.transaction.transaction_id;

    this._elementRef.nativeElement.innerHTML = this.transaction.type + " " +
      this.transaction.amount + " " +
      this.transaction.wallet.name;
  }
}
