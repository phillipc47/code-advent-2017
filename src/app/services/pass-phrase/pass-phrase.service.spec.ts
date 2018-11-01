import { TestBed } from '@angular/core/testing';

import { PassPhraseService } from './pass-phrase.service';

describe('PassPhraseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassPhraseService = TestBed.get(PassPhraseService);
    expect(service).toBeTruthy();
  });
});
