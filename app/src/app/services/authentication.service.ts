import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  // login(username:string, password:string){
  //  return from(signInWithEmailAndPassword(this.auth, username,password))
  // }


  login(email: string, password: string): Observable<any> {
   this.auth.currentUser?.getIdToken(true).then(function (idToken){
    console.log(idToken);
    localStorage.setItem("token",idToken);
    console.log(idToken);
    
   });
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  signup(name: string, email: string, password: string,) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(switchMap(({ user }) => updateProfile(user, { displayName: name })));
  }
  logout() {
    localStorage.clear();
    return from(this.auth.signOut());
  }
}
