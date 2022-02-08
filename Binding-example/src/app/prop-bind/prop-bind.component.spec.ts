import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBindComponent } from './prop-bind.component';

describe('PropBindComponent', () => {
  let component: PropBindComponent;
  let fixture: ComponentFixture<PropBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
