import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SHARED_MAT_IMPORTS } from "../shared.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        ...SHARED_MAT_IMPORTS,
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#isAuthorized', () => {
    it('should return false', () => {
      spyOn(component['localStorageService'], 'getItem').and.returnValue(undefined);
      const testValue = component.isAuthorized;
      expect(testValue).toEqual(false);
    });

    it('should return true', () => {
      spyOn(component['localStorageService'], 'getItem').and.returnValue('test');
      const testValue = component.isAuthorized;
      expect(testValue).toEqual(true);
    })
  });

  describe('#openSignIn', () => {
    it('should navigate', () => {
      spyOn(component['router'], 'navigate');
      component.openSignIn();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });

  describe('#openSignUp', () => {
    it('should navigate', () => {
      spyOn(component['router'], 'navigate');
      component.openSignUp();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });

  describe('#onSignOut', () => {
    it('should clean up on sign out', () => {
      spyOn(component['localStorageService'], 'deleteItem');
      spyOn(component['authService'], 'signOut');
      spyOn(component['router'], 'navigate');

      component.onSignOut();

      expect(component['localStorageService'].deleteItem).toHaveBeenCalled();
      expect(component['authService'].signOut).toHaveBeenCalled();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });
});
