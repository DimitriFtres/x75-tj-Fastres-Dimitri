import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SigninRoutingModule} from './signin.routing.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SigninRoutingModule,
    FormsModule
  ]
})
export class SigninModule {
}
