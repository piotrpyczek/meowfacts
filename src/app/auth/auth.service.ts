import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserStorage } from './user-storage';

export abstract class AuthService {

  abstract isAuthenticated(): Observable<boolean>;
  abstract authenticate(email: string, password: string): Observable<boolean>;
  abstract logout(): Observable<boolean>;
}

@Injectable()
export class DummyAuthService extends AuthService {

  constructor(private userStorage: UserStorage) {
    super();
  }

  isAuthenticated(): Observable<boolean> {
    let user = this.userStorage.get();
    return of(user != null);
  }

  authenticate(email: string, password: string): Observable<boolean> {
    this.userStorage.set(email);
    return of(true);
  }

  logout(): Observable<boolean> {
    this.userStorage.clear();
    return of(true);
  }

}
