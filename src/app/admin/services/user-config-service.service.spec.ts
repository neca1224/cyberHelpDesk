import { TestBed } from '@angular/core/testing';

import { UserConfigServiceService } from './user-config-service.service';

describe('UserConfigServiceService', () => {
  let service: UserConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
