import { TestBed } from '@angular/core/testing';

import { Authentication2Service } from './authentication2.service';

describe('Authentication2Service', () => {
  let service: Authentication2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authentication2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
