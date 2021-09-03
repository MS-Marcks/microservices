import { TestBed } from '@angular/core/testing';

import { Micro3Service } from './micro3.service';

describe('Micro3Service', () => {
  let service: Micro3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Micro3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
