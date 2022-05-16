import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAddressesComponent } from './display-addresses.component';

describe('DisplayAddressesComponent', () => {
  let component: DisplayAddressesComponent;
  let fixture: ComponentFixture<DisplayAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
