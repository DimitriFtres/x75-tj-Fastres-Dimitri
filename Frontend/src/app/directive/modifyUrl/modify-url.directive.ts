import {Directive, ElementRef, Input} from '@angular/core';
import {Router} from "@angular/router";

@Directive({
  selector: '[appModifyUrl]'
})
export class ModifyUrlDirective {

  @Input('appModifyUrl') directory!: String;

  constructor(private _elementRef: ElementRef,
              private _route : Router) { }

  ngOnInit(){

    let url = this._route.url;
    let tabUrl = url.match(("\\/\\w*"));
    if(tabUrl != null)
    {
      this._elementRef.nativeElement.href = tabUrl[0] + "/" + this.directory;
    }
  }

}
