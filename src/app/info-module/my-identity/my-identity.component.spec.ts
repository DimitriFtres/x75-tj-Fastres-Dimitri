import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIdentityComponent } from './my-identity.component';

describe('MyIdentityComponent', () => {
  let component: MyIdentityComponent;
  let fixture: ComponentFixture<MyIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
