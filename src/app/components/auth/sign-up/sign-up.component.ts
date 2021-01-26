import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth/auth.service";
import { map, tap } from "rxjs/operators";
import { LocalStorageService } from "../../../services/local-storage/local-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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
      'repeat-password': ['', [Validators.required]]
    });
  }

  public signUp() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.signUp(email, password).pipe(
      map(((value) => value)),
      tap((response: any) => {
        if (!response.token) {
          return;
        }

        this.localStorageService.setItem('token', response.token);
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
