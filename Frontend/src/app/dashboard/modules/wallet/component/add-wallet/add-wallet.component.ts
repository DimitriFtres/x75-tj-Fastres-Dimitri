import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SalaryService} from "@wallet/service/salary.service";
import {TransactionService} from "@wallet/service/transaction.service";
import {SalaryAddPayload, TransactionAddPayload, WalletAddPayload} from "@wallet/model";
import {WalletService} from "@wallet/service/wallet.service";
import {EmployeeService} from "@org-empl/service/employee.service";
import {Organization} from "@org-empl/model";
import {OrganizationService} from "@org-empl/service/organization.service";

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent implements OnInit {
  formwallet: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    actif : new FormControl('', []),
    type : new FormControl('', [Validators.required]),
    employee : new FormControl('', []),
    organization : new FormControl('', []),
  });

  formsalary: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required]),
    billing_date : new FormControl('', [Validators.required]),
    amount : new FormControl('', [Validators.required]),
    periodicity : new FormControl('', [Validators.required]),
    employee : new FormControl('', [Validators.required]),

  });

  formtransaction: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required]),
    amount : new FormControl('', [Validators.required]),
    wallet : new FormControl('', [Validators.required]),
  });

  constructor(public walletService : WalletService,
              public salaryService : SalaryService,
              public transactionService : TransactionService,
              public employeeService : EmployeeService,
              public organizationService : OrganizationService) { }

  ngOnInit(): void {
    this.employeeService.getList().subscribe();
    this.organizationService.getList().subscribe();
  }

    submitWallet() {
      this.employeeService.getDetail(this.formwallet.value.employee).subscribe(e => {
        this.organizationService.getDetail(this.formwallet.value.organization).subscribe( o => {
          this.formwallet.value.employee = e;
          this.formwallet.value.organization = o;
          this.walletService.create(this.formwallet.value as WalletAddPayload).subscribe();
        });
      });
      this.formwallet.reset();

    }

  submitSalary() {
    this.employeeService.getDetail(this.formsalary.value.employee).subscribe(e => {
      this.formsalary.value.employee = e;
      this.formsalary.value.amount = this.formsalary.value.amount.replace(',', '.');
      this.salaryService.create(this.formsalary.value as SalaryAddPayload).subscribe();
      this.formsalary.reset();
    });

  }

  submitTransaction() {
    console.log(this.formtransaction.value.wallet)
    this.walletService.getDetail(this.formtransaction.value.wallet).subscribe(w => {
      this.formtransaction.value.wallet = w;
      this.formtransaction.value.amount = this.formtransaction.value.amount.replace(',', '.');
      this.transactionService.create(this.formtransaction.value as TransactionAddPayload).subscribe();
      this.formtransaction.reset();
    });
  }
}

