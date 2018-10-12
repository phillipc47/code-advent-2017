import { TestBed } from '@angular/core/testing';

import { ChecksumService } from './checksum.service';

describe('ChecksumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChecksumService = TestBed.get(ChecksumService);
    expect(service).toBeTruthy();
  });
});
