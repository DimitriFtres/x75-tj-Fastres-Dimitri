import { Component, OnInit } from '@angular/core';
import {SalaryService} from "@wallet/service/salary.service";
import {TransactionService} from "@wallet/service/transaction.service";
import {WalletService} from "@wallet/service/wallet.service";

@Component({
  selector: 'app-list-wallet',
  templateUrl: './list-wallet.component.html',
  styleUrls: ['./list-wallet.component.scss']
})
export class ListWalletComponent implements OnInit {
  constructor(public walletService: WalletService,
              public salaryService: SalaryService,
              public transactionService : TransactionService) { }

  ngOnInit(): void {
    this.walletService.getList().subscribe();
    this.salaryService.getList().subscribe();
    this.transactionService.getList().subscribe();
  }

  deleteClick(wallet: number) {
    this.walletService.deleteWallet(wallet.toString()).subscribe();
  }

  deleteClicksalary(salary_id: number) {
    this.salaryService.deleteSalary(salary_id.toString()).subscribe();

  }

  deleteClicktransaction(transaction_id: any) {
    this.transactionService.deleteTransaction(transaction_id.toString()).subscribe();
  }
}
