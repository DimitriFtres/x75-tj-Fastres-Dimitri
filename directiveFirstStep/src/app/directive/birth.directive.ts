import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBirth]'
})
export class BirthDirective {
  @Input('appBirth') birth!: Date;
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    let dateNow = new Date;
    console.log(dateNow);
    let age = dateNow.getTime() - this.birth.getTime();
    age = Math.floor(age/1000/60/60/24/365);
    if(age >= 18)
    {
      this._elementRef.nativeElement.style.fontWeight = "900";
      console.log("age : "+age);
    }else{
      this._elementRef.nativeElement.style.backgroundColor = "#aaaaaa";

    }
    this._elementRef.nativeElement.innerHTML = age.toString()+ "ans";

  }
}
