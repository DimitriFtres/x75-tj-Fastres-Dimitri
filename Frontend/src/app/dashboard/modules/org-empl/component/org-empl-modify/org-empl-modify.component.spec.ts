import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEmplModifyComponent } from './org-empl-modify.component';

describe('OrgEmplModifyComponent', () => {
  let component: OrgEmplModifyComponent;
  let fixture: ComponentFixture<OrgEmplModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgEmplModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEmplModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
