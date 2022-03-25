import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrgEmplComponent } from './add-org-empl.component';

describe('AddComponent', () => {
  let component: AddOrgEmplComponent;
  let fixture: ComponentFixture<AddOrgEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrgEmplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrgEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
