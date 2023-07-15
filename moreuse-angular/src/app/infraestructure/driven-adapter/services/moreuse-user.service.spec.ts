import { TestBed } from '@angular/core/testing';

import { MoreuseUserService } from './moreuse-user.service';

describe('MoreuseUserService', () => {
  let service: MoreuseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreuseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
