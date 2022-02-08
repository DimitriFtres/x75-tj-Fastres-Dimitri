import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailHomePageComponent } from './contact-detail-home-page.component';

describe('ContactDetailHomePageComponent', () => {
  let component: ContactDetailHomePageComponent;
  let fixture: ComponentFixture<ContactDetailHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
