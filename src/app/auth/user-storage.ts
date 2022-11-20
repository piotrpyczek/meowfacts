import { Injectable } from "@angular/core";

export abstract class UserStorage {

  abstract get(): string | null;
  abstract set(email: string): void;
  abstract clear(): void;
}

@Injectable()
export class UserLocalStorage extends UserStorage {

  protected key = 'auth_app_user';

  get(): string | null {
    return localStorage.getItem(this.key);
  }

  set(email: string): void {
    localStorage.setItem(this.key, email);
  }

  clear(): void {
    localStorage.removeItem(this.key);
  }

}
