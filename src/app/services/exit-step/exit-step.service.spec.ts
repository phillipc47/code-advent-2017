import { TestBed } from '@angular/core/testing';

import { ExitStepService } from './exit-step.service';

describe('ExitStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitStepService = TestBed.get(ExitStepService);
    expect(service).toBeTruthy();
  });
});
