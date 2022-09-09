import { Injectable } from '@angular/core';
import {   Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,} from '@angular/fire/auth';
  import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth:Auth) { }

  // login(username:string, password:string){
  //  return from(signInWithEmailAndPassword(this.auth, username,password))
  // }
  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
}
