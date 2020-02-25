import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

interface User {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider)
      .then(res => resolve(res), err => {
        console.log(err);
        reject(err);
      });
    });
  }

  getCurrentUserEmail() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(u => {
        const user = this.getUser(u);
        if (user) {
          resolve(user);
        } else {
          reject('No logged in user');
        }
      });
    });
  }

  private getUser(obj: { providerData: { email: string }[] }) {
    if (obj && obj.providerData && obj.providerData[0] && obj.providerData[0].email) {
      return {
        email: obj.providerData[0].email
      };
    } else {
      return null;
    }
  }
}
