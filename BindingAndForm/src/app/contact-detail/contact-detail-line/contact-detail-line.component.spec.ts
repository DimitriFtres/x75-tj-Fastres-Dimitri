import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailLineComponent } from './contact-detail-line.component';

describe('ContactDetailLineComponent', () => {
  let component: ContactDetailLineComponent;
  let fixture: ComponentFixture<ContactDetailLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
