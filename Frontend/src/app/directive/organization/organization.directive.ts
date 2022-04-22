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

    this._elementRef.nativeElement.innerHTML += this.organization.name + " " ;
    this.organization.addresses.forEach(e => {
      this._elementRef.nativeElement.innerHTML +=  e.road + " " + e.town + "\r\n" + e.cp + " " + e.country + " \r\n"
    });
  }
}
