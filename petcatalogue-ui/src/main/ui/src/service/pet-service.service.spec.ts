import { TestBed } from '@angular/core/testing';

import { PetService } from './pet-service.service';

describe('PetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetService = TestBed.get(PetService);
    expect(service).toBeTruthy();
  });
});
