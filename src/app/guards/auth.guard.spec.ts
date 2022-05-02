import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from "@angular/router/testing";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'auth/sign-in',
          redirectTo: ''
        }]),
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('#canActivate', () => {
    it('should return false', () => {
      spyOn(guard['localStorageService'], 'getItem').and.returnValue(undefined);
      const testValue = guard.canActivate();
      expect(testValue).toEqual(false);
    });

    it('should return true', () => {
      spyOn(guard['localStorageService'], 'getItem').and.returnValue('test');
      const testValue = guard.canActivate();
      expect(testValue).toEqual(true);
    });
  });
});
