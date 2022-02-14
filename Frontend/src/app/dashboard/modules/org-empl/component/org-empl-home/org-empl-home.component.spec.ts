import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEmplHomeComponent } from './org-empl-home.component';

describe('OrgEmplHomeComponent', () => {
  let component: OrgEmplHomeComponent;
  let fixture: ComponentFixture<OrgEmplHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgEmplHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEmplHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
