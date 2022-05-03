import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#signIn', () => {
    it('should sign in', () => {
      const mockedString = 'test';

      spyOn(service['apiService'], 'signIn').and.returnValue(of({}));
      service.signIn(mockedString, mockedString);
      expect(service['apiService'].signIn).toHaveBeenCalled();
    })
  });

  describe('#signUp', () => {
    it('should sign up', () => {
      const mockedString = 'test';

      spyOn(service['apiService'], 'signUp').and.returnValue(of({}));
      service.signUp(mockedString, mockedString);
      expect(service['apiService'].signUp).toHaveBeenCalled();
    })
  });

  describe('#signOut', () => {
    it('should sign out', () => {
      spyOn(service['apiService'], 'signOut').and.returnValue(of({}));
      service.signOut();
      expect(service['apiService'].signOut).toHaveBeenCalled();
    })
  });
});
