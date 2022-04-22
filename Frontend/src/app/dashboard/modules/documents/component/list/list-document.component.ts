import { Component, OnInit } from '@angular/core';
import {DocumentService} from "@documents/service/document.service";


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

  constructor(public documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getList().subscribe(e => console.log(e));
  }

  deleteClick(document_id: number) {
    this.documentService.deleteDocument(document_id.toString()).subscribe();
  }
}
