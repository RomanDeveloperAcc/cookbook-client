import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from "../services/local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService,
              private router: Router) { }

  canActivate(): boolean {
    const token = this.localStorageService.getItem('token');

    if (!token) {
      this.router.navigate(['/auth/sign-in']);
      return false;
    }

    return true;
  }
}
