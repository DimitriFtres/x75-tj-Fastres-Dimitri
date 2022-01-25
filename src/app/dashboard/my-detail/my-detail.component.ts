import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isNil} from "lodash";

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.scss']
})
export class MyDetailComponent implements OnInit {
  name?: String;
  firstname?: String;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    const firstname = this.activatedRoute.snapshot.paramMap.get('firstname');
    if(!isNil(name)){
      this.name = name;
    }
    if(!isNil(firstname)){
      this.firstname = firstname;
    }
  }

}
