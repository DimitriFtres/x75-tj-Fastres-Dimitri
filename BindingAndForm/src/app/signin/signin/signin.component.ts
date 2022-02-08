import { Component, OnInit } from '@angular/core';
import {Credential} from "@signin/models";

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
    this.error = "";
    if(this.username.length < 5) this.error += "Username trop petit ";
    if(this.username.length > 50) this.error += "Username trop grand ";
    if(this.username == "") this.error += "Username vide ";
    if(this.password == "") this.error += "password vide ";
    if(this.password.length < 5) this.error += "password trop petit ";
    if(this.password.length > 50) this.error += "password trop grand ";

    if(this.error.length > 0)
    {
      this.payload =
        {
          username: this.username,
          password: this.password
        };
    }

    console.log('ce que payload vaut', this.payload);
  }

  ngOnInit(): void {
  }

}
