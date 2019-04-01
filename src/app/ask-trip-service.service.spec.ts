import { TestBed } from '@angular/core/testing';

import { AskTripServiceService } from './ask-trip-service.service';

describe('AskTripServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskTripServiceService = TestBed.get(AskTripServiceService);
    expect(service).toBeTruthy();
  });
});
