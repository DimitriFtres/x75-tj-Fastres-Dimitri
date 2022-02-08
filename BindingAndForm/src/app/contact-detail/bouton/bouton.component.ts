import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent implements OnInit {

  constructor() { }

  click()
  {
    alert("On click");
  }

  ngOnInit(): void {
  }

}
