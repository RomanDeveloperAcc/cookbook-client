import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../../../services/local-storage/local-storage.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public capImg = 'assets/img/core/chief-cap.png';

  constructor(private localStorageService: LocalStorageService,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  public get isAuthorized(): boolean {
    const token = this.localStorageService.getItem('token');
    return !!token;
  }

  public openSignIn(): void {
    this.router.navigate(['/auth', 'sign-in']);
  }

  public openSignUp(): void {
    this.router.navigate(['/auth', 'sign-up']);
  }

  public onSignOut(): void {
    this.localStorageService.deleteItem('token');
    this.authService.signOut();
    this.router.navigate(['/home']);
  }
}
