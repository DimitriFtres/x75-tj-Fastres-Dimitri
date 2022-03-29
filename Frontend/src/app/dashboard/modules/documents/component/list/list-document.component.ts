import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DocumentService} from "@documents/service/document.service";
import {Document} from "@documents/model";


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {
  documents: Document[] = [];
  service$: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);

  constructor(public documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getList().subscribe(documents => this.documents = documents);
  }

  deleteClick(document: Document) {
    this.documentService.deleteDocument(document.document_id.toString()).subscribe()
    this.documentService.getList();
  }
}
