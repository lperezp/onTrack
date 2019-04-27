import { TestBed } from '@angular/core/testing';

import { OtsService } from './ots.service';

describe('OtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtsService = TestBed.get(OtsService);
    expect(service).toBeTruthy();
  });
});
