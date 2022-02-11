import { Component, OnInit } from '@angular/core';
import {Credential} from "@signin/models";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  payload: Credential = { username:'', password:''}
  error: string='';


  constructor() { }

  submit() {
    this.error = "";
    if(this.payload.username.length < 5) this.error += "Username trop petit ";
    if(this.payload.username.length > 50) this.error += "Username trop grand ";
    if(this.payload.username == "") this.error += "Username vide ";
    if(this.payload.password == "") this.error += "password vide ";
    if(this.payload.password.length < 5) this.error += "password trop petit ";
    if(this.payload.password.length > 50) this.error += "password trop grand ";

    if(this.error.length > 0)
    {
      //@todo save
    }

    console.log('ce que payload vaut', this.payload);
  }

  ngOnInit(): void {
  }

}
