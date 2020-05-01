import { TestBed } from '@angular/core/testing';

import { ServiciosFireService } from './servicios-fire.service';

describe('ServiciosFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosFireService = TestBed.get(ServiciosFireService);
    expect(service).toBeTruthy();
  });
});
