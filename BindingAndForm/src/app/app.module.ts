import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContactFormComponent} from './contact-detail/contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BoutonComponent} from './contact-detail/bouton/bouton.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    BoutonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
