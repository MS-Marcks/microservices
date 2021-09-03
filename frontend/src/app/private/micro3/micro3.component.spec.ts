import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Micro3Component } from './micro3.component';

describe('Micro3Component', () => {
  let component: Micro3Component;
  let fixture: ComponentFixture<Micro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Micro3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Micro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
