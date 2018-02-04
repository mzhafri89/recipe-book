import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  private token: string;

  constructor(private router: Router) { }

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( res => console.log(res))
      .catch( error => console.log(error));
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( res => {
          console.log(res);
          this.router.navigate(['recipes']);
          firebase.auth().currentUser.getToken()
            .then( (token: string) => {this.token = token; });
        }
      )
      .catch( error => console.log(error));
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }
}
