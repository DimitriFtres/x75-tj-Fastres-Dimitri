import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-identity',
  templateUrl: './my-identity.component.html',
  styleUrls: ['./my-identity.component.scss']
})
export class MyIdentityComponent implements OnInit {
  firstname: string | undefined;
  lastname: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
