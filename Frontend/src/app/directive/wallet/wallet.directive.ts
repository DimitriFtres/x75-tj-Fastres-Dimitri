import {Directive, ElementRef, Input} from '@angular/core';
import {Transaction, Wallet} from "@wallet/model";

@Directive({
  selector: '[appWallet]'
})
export class WalletDirective {


  @Input('appWallet') wallet!: Wallet;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.value = this.wallet.wallet_id;

    this._elementRef.nativeElement.innerHTML = this.wallet.name;
  }
}
