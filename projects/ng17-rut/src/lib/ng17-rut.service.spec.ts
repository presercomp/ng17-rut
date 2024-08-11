import { TestBed } from '@angular/core/testing';

import { Ng17RutService } from './ng17-rut.service';

describe('Ng17RutService', () => {
  let service: Ng17RutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng17RutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
