import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../models';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  payload!: Contact;
  formGroup = new FormGroup({
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  constructor() {
  }

  submit(): void {
    this.payload = this.formGroup.value as Contact;
    console.log('Je submit', this.payload);
  }

  ngOnInit(): void {
  }

}
