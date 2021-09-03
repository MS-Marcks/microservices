import { TestBed } from '@angular/core/testing';

import { Micro1Service } from './micro1.service';

describe('Micro1Service', () => {
  let service: Micro1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Micro1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
