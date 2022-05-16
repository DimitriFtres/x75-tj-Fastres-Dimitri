import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Salary, SalaryUpdatePayload, WalletUpdatePayload} from "@wallet/model";
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "@wallet/service/wallet.service";
import {SalaryService} from "@wallet/service/salary.service";
import {EmployeeService} from "@org-empl/service/employee.service";
import {BigInteger} from "@angular/compiler/src/i18n/big_integer";

@Component({
  selector: 'app-modify-salary',
  templateUrl: './modify-salary.component.html',
  styleUrls: ['./modify-salary.component.scss']
})
export class ModifySalaryComponent implements OnInit {
  salary!: Salary;
  formsalary: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required]),
    billing_date : new FormControl('', [Validators.required]),
    amount : new FormControl('', [Validators.required]),
    periodicity : new FormControl('', [Validators.required]),
    employee : new FormControl('', []),
  });
  constructor(public route: ActivatedRoute,
              public salaryService: SalaryService,
              public employeeService: EmployeeService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getList().subscribe();
    if(id != null)
      this.salaryService.getDetail(id).subscribe(e => {
        let date = new Date(Date.parse(e.billing_date.toString()));
        let month = date.getUTCMonth().toString().length > 1 ? date.getUTCMonth() : '0'+date.getUTCMonth();
        let day = date.getDate().toString().length > 1 ? date.getDate() : '0'+date.getDate();

        let dateString = date.getFullYear() + "-" + month + "-" +day;
        this.salary = e;
        console.log(dateString);
        this.formsalary.setValue({
          type : e.type,
          billing_date : dateString,
          amount : e.amount,
          periodicity : e.periodicity,
          employee : e.employee
        })
      });
  }
  submit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      console.log(this.formsalary.value.billing_date)
      let update = {
        salary_id: Number.parseInt(id),
        type: this.formsalary.value.type,
        billing_date: this.formsalary.value.billing_date,
        amount: this.formsalary.value.amount,
        periodicity: this.formsalary.value.periodicity,
        employee : this.formsalary.value.employee
      } as SalaryUpdatePayload
      this.salaryService.update(update).subscribe();
    }
  }
}
