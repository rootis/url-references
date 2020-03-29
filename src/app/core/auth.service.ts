import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private afAuth: AngularFireAuth) {
    auth().onAuthStateChanged((state) => this.user = state?.providerData?.[0]);
  }

  loginGoogle() {
    return new Promise<any>((resolve, reject) => this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(result => {
        const profile = result?.additionalUserInfo?.profile;

        if (profile) {
          resolve(profile);
        } else {
          reject('Login failed');
        }
      }, err => this.catchError(err, reject))
      .catch(err => this.catchError(err, reject))
    );
  }

  logout() {
    auth().signOut();
  }

  private catchError(err, reject) {
    console.error(err);
    reject(err);
  }
}
