import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MajDirective } from './directive/maj.directive';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BirthDirective } from './directive/birth.directive';
import { LineDirective } from './directive/line.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    MajDirective,
    BirthDirective,
    LineDirective,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
