import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Credential} from "../models/Credential";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  payload!: Credential;
  username: string='';
  password: string='';
  error: string='';


  constructor() { }

  submit() {
    if(this.username.length < 5) this.error += "Username trop petit ";
    if(this.username.length > 50) this.error += "Username trop grand ";
    if(this.username == "") this.error += "Username vide ";
    if(this.password == "") this.error += "password vide ";
    if(this.password.length < 5) this.error += "password trop petit ";
    if(this.password.length > 50) this.error += "password trop grand ";


    this.payload =
      {
        username: this.username,
        password: this.password
      };
  }

  ngOnInit(): void {
  }

}
