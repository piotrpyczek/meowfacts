import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, DummyAuthService } from './auth.service';
import { AuthGuard } from './auth-guard';
import { UserLocalStorage, UserStorage } from './user-storage';



@NgModule({
  imports: [
    CommonModule
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: UserStorage, useClass: UserLocalStorage },
        { provide: AuthService, useClass: DummyAuthService },
        AuthGuard
      ]
    }
  }
}
