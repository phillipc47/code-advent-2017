import { TestBed } from '@angular/core/testing';

import { DescriptionLinkBuilderService } from './description-link-builder.service';

describe('DescriptionLinkBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescriptionLinkBuilderService = TestBed.get(DescriptionLinkBuilderService);
    expect(service).toBeTruthy();
  });
});
