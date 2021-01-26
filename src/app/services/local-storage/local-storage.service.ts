import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}
