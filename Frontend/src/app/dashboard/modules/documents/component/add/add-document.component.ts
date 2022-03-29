import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "@documents/service/document.service";
import {DocumentAddPayload, Document} from "@documents/model";


@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  documents!: Document[];

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

  constructor(public documentService : DocumentService) { }

  ngOnInit(): void {
    this.documentService.getList().subscribe(documents => this.documents = documents);

  }
  submit(){
    this.documentService.create(this.formDocument.value as DocumentAddPayload).subscribe(documents => this.documents = documents);
    this.documentService.getList().subscribe(documents => this.documents = documents);

  }
}
