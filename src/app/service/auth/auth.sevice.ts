import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })

export class AuthService {
    constructor(
        private router: Router
    ) {}
    
    login(email: string, password: string): void {
        // this.authenticationClient.login(username, password).subscribe((token) => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        this.router.navigate(['/home']);
        this.isLoggedIn()
        // });
    }
    
    isLoggedIn(): boolean {
        let email = localStorage.getItem('email');
        let password=localStorage.getItem('password');
        return email && password ? true:false
      }
  }