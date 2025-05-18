import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  

  constructor(private afAuth: Auth, private router: Router) { }

  // Register User
  async register({email, password}: Credentials) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.afAuth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  // Login User
  async login({email, password}: Credentials) {
    try {
      const user = await signInWithEmailAndPassword(
        this.afAuth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  // Forgot Password
  forgotPassword(email: string) {
    // return this.afAuth.sendPasswordResetEmail(email);
  }

  // Logout User
  logout() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}