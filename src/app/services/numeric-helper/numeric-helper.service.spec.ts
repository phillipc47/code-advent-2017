import { TestBed } from '@angular/core/testing';

import { NumericHelperService } from './numeric-helper.service';

describe('NumericHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumericHelperService = TestBed.get(NumericHelperService);
    expect(service).toBeTruthy();
  });
});
