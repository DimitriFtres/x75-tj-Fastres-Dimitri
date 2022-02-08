import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.scss']
})
export class PropBindComponent implements OnInit {

  inter :string = "mon super prop interpolation";
  @Input() prop :string = "mon super prop pour le binding";
  model :string = "ma super valeur ngModel";


  constructor() { }

  displayConsole()
  {
    console.log('Event Binder');
    console.log(this.prop);
  }

  ngOnInit(): void {
  }

}
