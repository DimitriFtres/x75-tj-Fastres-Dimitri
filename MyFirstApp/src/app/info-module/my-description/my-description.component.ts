import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-description',
  templateUrl: './my-description.component.html',
  styleUrls: ['./my-description.component.scss']
})
export class MyDescriptionComponent implements OnInit {

  description: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
