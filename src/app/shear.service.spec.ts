import { TestBed } from '@angular/core/testing';

import { ShearService } from './shear.service';

describe('ShearService', () => {
  let service: ShearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
