import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEmplModifyEmployeeComponent } from './org-empl-modify-employee.component';

describe('OrgEmplModifyEmployeeComponent', () => {
  let component: OrgEmplModifyEmployeeComponent;
  let fixture: ComponentFixture<OrgEmplModifyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgEmplModifyEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEmplModifyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
