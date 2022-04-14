import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Credential} from "@auth/model";
import {AuthService} from "../../../service/auth.service";
import {SigninPayload} from "../../../model";
import {map} from "rxjs/operators";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit(){
    this.authService.signin(this.formAuth.value as SigninPayload).forEach(e => console.log(e.data))
    this.authService.signin(this.formAuth.value as SigninPayload);
  }
}
