import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const AUTH_MAT_IMPORTS = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ...AUTH_MAT_IMPORTS
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
