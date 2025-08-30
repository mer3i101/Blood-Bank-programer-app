import { TestBed } from '@angular/core/testing';

import { HosService } from './hos.service';

describe('HosService', () => {
  let service: HosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
