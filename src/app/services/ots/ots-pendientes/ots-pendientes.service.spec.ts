import { TestBed } from '@angular/core/testing';

import { OtsPendientesService } from './ots-pendientes.service';

describe('OtsPendientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtsPendientesService = TestBed.get(OtsPendientesService);
    expect(service).toBeTruthy();
  });
});
