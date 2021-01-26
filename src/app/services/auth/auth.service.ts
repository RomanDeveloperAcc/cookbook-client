import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  public signIn(email: string, password: string): Observable<object> {
    return this.apiService.signIn(email, password);
  }

  public signUp(email: string, password: string): Observable<object> {
    return this.apiService.signUp(email, password);
  }

  public signOut(): Observable<object> {
    return this.apiService.signOut();
  }
}
