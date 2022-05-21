import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "@documents/service/document.service";
import {DocumentAddPayload, Document} from "@documents/model";
import {EmployeeService} from "@org-empl/service/employee.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {TransactionService} from "@wallet/service/transaction.service";
import {AccountService} from "@auth/service/account.service";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {FileManagerService} from "@shared/service/fileManager/file-manager.service";
import {FileManager} from "@shared/model/fileManager/fileManager";
import {FileManagerAddPayload} from "@shared/model/fileManager/fileManagerAddPayload";


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
    employee : new FormControl('', [Validators.required]),
    organization : new FormControl('', [Validators.required]),
    transaction : new FormControl('', [Validators.required])
  });

  constructor(public documentService : DocumentService,
              public employeeService : EmployeeService,
              public organizationService : OrganizationService,
              public transactionService : TransactionService,
              public fileMangerService : FileManagerService,
              public httpClient : HttpClient) { }

  ngOnInit(): void {
    this.documentService.getList().subscribe();
    this.employeeService.getList().subscribe();
    this.organizationService.getList().subscribe();
    this.transactionService.getList().subscribe();
  }

  submit(){
    this.save();
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
    this.formDocument.get('path')!.setValue(event);
  }

  save() {
    let fileUpload = {
      name: 'file_' + new Date().getTime(),
      type: 'DOCX',
      path: 'C:\\Users\\jimid\\IdeaProjects\\Fil Rouge\\Fil_rouge\\upload',
      deleted: false,
      file: this.files
    } as FileManagerAddPayload

    this.formDocument.get('path')!.setValue(fileUpload);

    const formData: FormData = new FormData();
    formData.append('file', this.files!.item(0)!);
    console.log(formData.get('file'))
    const newRequest = new HttpRequest('POST', `http://localhost:2021/api/file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    this.httpClient.request(newRequest).subscribe((data: any) => {
      console.log('data', data.body);
    })
  }
}
