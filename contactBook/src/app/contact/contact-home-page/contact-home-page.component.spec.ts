import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHomePageComponent } from './contact-home-page.component';

describe('ContactHomePageComponent', () => {
  let component: ContactHomePageComponent;
  let fixture: ComponentFixture<ContactHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
