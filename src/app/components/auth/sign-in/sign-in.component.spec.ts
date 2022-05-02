import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AUTH_MAT_IMPORTS } from "../auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
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
    fixture = TestBed.createComponent(SignInComponent);
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

  describe('#signIn', () => {
   it('should sign in', () => {
     formBuilder = TestBed.inject(FormBuilder);
     component.form = formBuilder.group({
       'email': ['', [Validators.email, Validators.required]],
       'password': ['', [Validators.required, Validators.minLength(8)]],
     });

     spyOn(component['authService'], 'signIn').and.returnValue(of({
       token: 'test'
     }));
     spyOn(component['localStorageService'], 'setItem');
     spyOn(component['router'], 'navigate');

     component.signIn();

     expect(component['authService'].signIn).toHaveBeenCalled();
     expect(component['localStorageService'].setItem).toHaveBeenCalled();
     expect(component['router'].navigate).toHaveBeenCalled();
   });
  });
});
