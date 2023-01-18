import { TestBed } from '@angular/core/testing';

import { LoginManagerServiceService } from './login-manager-service.service';

describe('LoginManagerServiceService', () => {
  let service: LoginManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
