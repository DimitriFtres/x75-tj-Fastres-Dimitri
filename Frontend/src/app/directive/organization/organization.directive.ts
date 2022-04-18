import {Directive, ElementRef, Input} from '@angular/core';
import {Employee, Organization} from "@org-empl/model";

@Directive({
  selector: '[appOrganization]'
})
export class OrganizationDirective {

  @Input('appOrganization') organization!: Organization;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.value = this.organization.organization_id;

    this._elementRef.nativeElement.innerHTML += this.organization.name + " " +
      this.organization.address.road + " " +
      this.organization.address.number + ", " + this.organization.address.town + "\r\n" + this.organization.address.cp + " "
      + this.organization.address.country + "\r\n" + this.organization.actif +". \r\n";
  }
}
