import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address, Employee, EmployeeUpdatePayload} from "@org-empl/model";
import {EmployeeService} from "@org-empl/service/employee.service";
import {AddressService} from "@org-empl/service/address.service";
import {OrganizationService} from "@org-empl/service/organization.service";
import {ActivatedRoute} from "@angular/router";
import {Document, DocumentUpdatePayload} from "@documents/model";
import {DocumentService} from "@documents/service/document.service";
import {TransactionService} from "@wallet/service/transaction.service";

@Component({
  selector: 'app-modify-document',
  templateUrl: './modify-document.component.html',
  styleUrls: ['./modify-document.component.scss']
})
export class ModifyDocumentComponent implements OnInit {
  document: Document = {} as Document;

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
              public transactionService : TransactionService,
              public organizationService : OrganizationService,
              public employeeService : EmployeeService,
              public route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id != null)
      this.documentService.getDetail(id).subscribe(e => {
        this.document = e;
        console.log(this.document);
      });
  }
  submit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null)
    {
      let update = {
        name: this.formDocument.value.name,
        description: this.formDocument.value.description,
        free_access: this.formDocument.value.free_access,
        path: this.formDocument.value.path,
        type: this.formDocument.value.type,
        employee: this.formDocument.value.employee,
        organization: this.formDocument.value.organization,
        transaction: this.formDocument.value.transaction,
        document_id: Number.parseInt(id)
      } as DocumentUpdatePayload
      this.documentService.update(update).subscribe(e =>  this.formDocument.reset());
    }

  }

}
