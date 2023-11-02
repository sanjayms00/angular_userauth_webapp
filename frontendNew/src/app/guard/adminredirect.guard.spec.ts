import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminredirectGuard } from './adminredirect.guard';

describe('adminredirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminredirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
