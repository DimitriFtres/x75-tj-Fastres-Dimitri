import {Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {template} from "lodash";

@Directive({
  selector: '[appLine]'
})
export class LineDirective{
  @Input('appLine') onIt: string ="#000000";

  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    console.log("dede");
  }
  @HostListener('mouseover') onMouseEnter() {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', this.onIt);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', "#ffffff");

  }
}
