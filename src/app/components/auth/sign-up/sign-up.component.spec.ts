import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AUTH_MAT_IMPORTS } from "../auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ...AUTH_MAT_IMPORTS,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#setUpForm', () => {
    it('should initialize form', () => {
      spyOn(component['formBuilder'], 'group');
      component['setUpForm']();
      expect(component['formBuilder'].group).toHaveBeenCalled();
    });
  });

  describe('#signUp', () => {
    it('should sign up', () => {
      formBuilder = TestBed.inject(FormBuilder);
      component.form = formBuilder.group({
        'email': ['', [Validators.email, Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(8)]],
        'repeat-password': ['', [Validators.required]]
      });

      spyOn(component['authService'], 'signUp').and.returnValue(of({
        token: 'test'
      }));
      spyOn(component['localStorageService'], 'setItem');
      spyOn(component['router'], 'navigate');

      component.signUp();

      expect(component['authService'].signUp).toHaveBeenCalled();
      expect(component['localStorageService'].setItem).toHaveBeenCalled();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });
});
