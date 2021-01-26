import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.backendLink}/api`;
  private token = '';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getItem('token');
  }

  public signIn(email: string, password: string): Observable<object> {
    const url = `${this.apiUrl}/signin`;
    const payload = {
      email,
      password
    };

    return this.http.post<object>(url, payload);
  }

  public signUp(email: string, password: string): Observable<object> {
    const url = `${this.apiUrl}/signup`;
    const payload = {
      email,
      password
    };
    return this.http.post<object>(url, payload);
  }

  public signOut(): Observable<object> {
    const url = `${this.apiUrl}/logout`;

    return this.http.delete<object>(url);
  }
}
