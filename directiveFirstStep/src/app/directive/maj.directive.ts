import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMaj]'
})
export class MajDirective {

  @Input('appMaj') word!: String;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(){
      this.word = this.word.toLowerCase();
      let firstLetter = this.word.charAt(0).toUpperCase();
      let restOfWord = this.word.substring(1);
      this.word = firstLetter+restOfWord;
      console.log(this.word);
      this._elementRef.nativeElement.innerHTML = this.word;
  }
}
