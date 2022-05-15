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
  files?: FileList;
  
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
    console.log(this.formDocument.value);
    this.employeeService.getDetail(this.formDocument.value.employee).subscribe(employee => {
      this.formDocument.value.employee = employee;
      this.organizationService.getDetail(this.formDocument.value.organization).subscribe(organization => {
        this.formDocument.value.organization = organization;
        this.transactionService.getDetail(this.formDocument.value.transaction).subscribe(transaction => {
          this.formDocument.value.transaction = transaction;
          this.documentService.create(this.formDocument.value as DocumentAddPayload).subscribe(e => this.formDocument.reset());
        });
      });
    });
  }

  onFileChange(event: any): void {
    this.files = event.target.files;
  }

  save() {
    const obj = {
      name: 'file_' + new Date().getTime(),
      type: 'DOCX',
      path: 'mon/super/path',
      deleted: false,
      file: this.files
    }
    const formData: FormData = new FormData();
    formData.append('file', this.files!.item(0)!);
    const newRequest = new HttpRequest('POST', `${this.apiUrl}upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    this.httpClient.request(newRequest).subscribe((data: any) => {
      console.log('data', data.body);
    })
  }
}
