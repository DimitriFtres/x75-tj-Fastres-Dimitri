import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "@documents/service/document.service";
import {DocumentAddPayload, Document} from "@documents/model";
import {EmployeeService} from "@org-empl/service/employee.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {TransactionService} from "@wallet/service/transaction.service";
import {AccountService} from "@auth/service/account.service";


@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  formDocument: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    free_access : new FormControl('', [Validators.required]),
    path : new FormControl('', [Validators.required]),
    type : new FormControl('', [Validators.required]),
    employee : new FormControl('', ),
    organization : new FormControl('', ),
    transaction : new FormControl('', )
  });

  constructor(public documentService : DocumentService,
              public employeeService : EmployeeService,
              public organizationService : OrganizationService,
              public transactionService : TransactionService) { }

  ngOnInit(): void {
    this.documentService.getList().subscribe();
    this.employeeService.getList().subscribe();
    this.organizationService.getList().subscribe();
    this.transactionService.getList().subscribe();
  }
  submit(){
    console.log(this.formDocument.value as DocumentAddPayload);
    this.employeeService.getDetail(this.formDocument.value.employee).subscribe(e => this.formDocument.value.employee = e);
    console.log(this.formDocument.value as DocumentAddPayload);
    this.organizationService.getDetail(this.formDocument.value.organization).subscribe(e => this.formDocument.value.organization = e);
    console.log(this.formDocument.value as DocumentAddPayload);
    this.transactionService.getDetail(this.formDocument.value.transaction).subscribe(e => this.formDocument.value.transaction = e);
    console.log(this.formDocument.value as DocumentAddPayload);
    this.documentService.create(this.formDocument.value as DocumentAddPayload).subscribe(e => console.log(e));
  }
}
