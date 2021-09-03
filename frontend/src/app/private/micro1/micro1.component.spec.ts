import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Micro1Component } from './micro1.component';

describe('Micro1Component', () => {
  let component: Micro1Component;
  let fixture: ComponentFixture<Micro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Micro1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Micro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
