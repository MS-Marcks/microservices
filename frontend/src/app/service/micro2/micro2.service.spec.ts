import { TestBed } from '@angular/core/testing';

import { Micro2Service } from './micro2.service';

describe('Micro2Service', () => {
  let service: Micro2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Micro2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
