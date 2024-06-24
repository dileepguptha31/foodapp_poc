import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Replace this logic with actual authentication logic
    if (username === 'user' && password === '123456') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}