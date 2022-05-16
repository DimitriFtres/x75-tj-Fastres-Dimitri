import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWalletComponent } from './modify-wallet.component';

describe('ModifyWalletComponent', () => {
  let component: ModifyWalletComponent;
  let fixture: ComponentFixture<ModifyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
