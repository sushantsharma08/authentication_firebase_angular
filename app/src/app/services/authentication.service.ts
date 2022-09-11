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
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  signup(name: string, email: string, password: string,) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(switchMap(({ user }) => updateProfile(user, { displayName: name })));
  }
  // updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
  //   const user = this.auth.currentUser;
  //   return of(user).pipe(
  //     concatMap((user) => {
  //       if (!user) throw new Error('Not Authenticated');

  //       return updateProfile(user, profileData);
  //     })
  //   );
  // }
  logout() {
    return from(this.auth.signOut());
  }
}
