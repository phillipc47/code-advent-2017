import { TestBed } from '@angular/core/testing';

import { ReverseCaptchaService } from './reverse-captcha.service';

describe('ReverseCaptchaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReverseCaptchaService = TestBed.get(ReverseCaptchaService);
    expect(service).toBeTruthy();
  });
});
