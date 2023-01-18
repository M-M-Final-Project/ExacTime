import { TestBed } from '@angular/core/testing';

import { SignUpManagerServiceService } from './sign-up-manager-service.service';

describe('SignUpManagerServiceService', () => {
  let service: SignUpManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
