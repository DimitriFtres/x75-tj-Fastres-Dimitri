import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../security/service/auth.service";
import {AccountService} from "@auth/service/account.service";
import {SignupPayload} from "../../../security/model";
import {Account, AccountAddPayload} from "@auth/model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formSignUp: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService,
              public accountService: AccountService) { }

  ngOnInit(): void {
  }

  submit() {
    const signUp = {
      username: this.formSignUp.value.username,
      password: this.formSignUp.value.password
    } as SignupPayload

    this.authService.signup(signUp).subscribe();
  }
}
