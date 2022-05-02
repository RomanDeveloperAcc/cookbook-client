import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#setItem', () => {
    it('should set item to local storage', () => {
      const mockedString = 'test';
      spyOn(localStorage, 'setItem');
      service.setItem(mockedString, mockedString);
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('#getItem', () => {
    it('should get item from local storage', () => {
      const mockedString = 'test';
      spyOn(localStorage, 'getItem');
      service.getItem(mockedString);
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });

  describe('#deleteItem', () => {
    it('should delete item from local storage', () => {
      const mockedString = 'test';
      spyOn(localStorage, 'removeItem');
      service.deleteItem(mockedString);
      expect(localStorage.removeItem).toHaveBeenCalled();
    });
  });
});
