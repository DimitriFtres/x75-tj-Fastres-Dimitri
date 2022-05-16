import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySalaryComponent } from './modify-salary.component';

describe('ModifySalaryComponent', () => {
  let component: ModifySalaryComponent;
  let fixture: ComponentFixture<ModifySalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifySalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
