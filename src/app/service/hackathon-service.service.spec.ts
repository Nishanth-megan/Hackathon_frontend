import { TestBed } from '@angular/core/testing';

import { HackathonServiceService } from './hackathon-service.service';

describe('HackathonServiceService', () => {
  let service: HackathonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackathonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
