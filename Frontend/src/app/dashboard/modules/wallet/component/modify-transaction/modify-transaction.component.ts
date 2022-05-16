import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Transaction, TransactionAddPayload, TransactionUpdatePayload, WalletUpdatePayload} from "@wallet/model";
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "@wallet/service/wallet.service";
import {SalaryService} from "@wallet/service/salary.service";
import {TransactionService} from "@wallet/service/transaction.service";

@Component({
  selector: 'app-modify-transaction',
  templateUrl: './modify-transaction.component.html',
  styleUrls: ['./modify-transaction.component.scss']
})
export class ModifyTransactionComponent implements OnInit {
  transaction : Transaction = {} as Transaction;
  formtransaction: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required]),
    amount : new FormControl('', [Validators.required]),
    wallet : new FormControl('', [Validators.required])
  });

  constructor(public route: ActivatedRoute,
              public transactionService: TransactionService,
              public walletService: WalletService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.walletService.getList().subscribe();
      if(id != null)
      this.transactionService.getDetail(id).subscribe(e => {
        this.transaction = e;
        this.formtransaction.setValue({
          type : e.type,
          amount : e.amount,
          wallet : e.wallet.wallet_id
        })
      });
  }
  submit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.walletService.getDetail(this.formtransaction.value.wallet).subscribe(w => {
        this.formtransaction.value.wallet = w;
        this.formtransaction.value.amount = this.formtransaction.value.amount.replace(',', '.');
        console.log(this.formtransaction.value.amount)
        let update = {
          transaction_id : Number.parseInt(id!),
          type: this.formtransaction.value.type,
          amount: this.formtransaction.value.amount,
          wallet : this.formtransaction.value.wallet
        } as TransactionUpdatePayload

        this.transactionService.update(update).subscribe();
        this.formtransaction.reset();
      });
    }
  }
}
