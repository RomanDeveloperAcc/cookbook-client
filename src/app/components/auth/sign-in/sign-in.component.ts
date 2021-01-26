import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map, tap } from "rxjs/operators";
import { AuthService } from "../../../services/auth/auth.service";
import { LocalStorageService } from "../../../services/local-storage/local-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private localStorageService: LocalStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.setUpForm();
  }

  private setUpForm(): void {
    this.form = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public signIn(): void {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.signIn(email, password).pipe(
      map(((value) => value)),
      tap((response: any) => {
        this.localStorageService.setItem('token', response.token);
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
