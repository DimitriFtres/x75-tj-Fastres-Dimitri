import { TestBed } from '@angular/core/testing';

import { OrgEmplService } from './org-empl.service';

describe('OrgEmplService', () => {
  let service: OrgEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgEmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
