import { TestBed } from '@angular/core/testing';

import { Tab1ServiceService } from './tab1-service.service';

describe('Tab1ServiceService', () => {
  let service: Tab1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
