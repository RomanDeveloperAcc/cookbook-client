import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { HttpHandler, HttpRequest } from "@angular/common/http";

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });

  describe('#intercept', () => {
    it('should handle the request', () => {
      const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
      const mockedRequest = new HttpRequest('GET', '');
      const mockedHandler = {
        handle: (req) => {}
      } as HttpHandler;

      spyOn(mockedHandler, 'handle');
      interceptor.intercept(mockedRequest, mockedHandler);
      expect(mockedHandler.handle).toHaveBeenCalled();
    });
  });
});
