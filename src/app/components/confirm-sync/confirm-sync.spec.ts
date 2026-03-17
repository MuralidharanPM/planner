import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSync } from './confirm-sync';

describe('ConfirmSync', () => {
  let component: ConfirmSync;
  let fixture: ComponentFixture<ConfirmSync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmSync],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmSync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
