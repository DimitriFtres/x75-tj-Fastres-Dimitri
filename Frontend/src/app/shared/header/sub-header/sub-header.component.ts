import { Component, OnInit } from '@angular/core';
import {Router, RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
