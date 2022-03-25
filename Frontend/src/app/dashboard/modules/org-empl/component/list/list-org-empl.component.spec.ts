import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrgEmplComponent } from './list-org-empl.component';

describe('ListComponent', () => {
  let component: ListOrgEmplComponent;
  let fixture: ComponentFixture<ListOrgEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrgEmplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrgEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
