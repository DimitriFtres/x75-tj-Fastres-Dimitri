import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEmplModifyOrganizationComponent } from './org-empl-modify-organization.component';

describe('OrgEmplModifyOrganizationComponent', () => {
  let component: OrgEmplModifyOrganizationComponent;
  let fixture: ComponentFixture<OrgEmplModifyOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgEmplModifyOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEmplModifyOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
