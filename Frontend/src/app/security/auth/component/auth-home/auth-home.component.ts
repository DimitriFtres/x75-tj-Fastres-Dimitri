import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Credential} from "@auth/model";

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {
  formAuth = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  credential!: Credential;

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(){
    console.log('heelo');
    this.credential = this.formAuth.value as Credential;
    console.log('Valeur de this.credential : '+ this.credential);

  }
}
