import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { UserCredentials } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userCredentials: UserCredentials = {
    email: '',
    password: ''
  };

  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin() {
    if (this.validate()) {
      this.authService.authenticate(this.userCredentials.email, this.userCredentials.password)
        .subscribe(authenticated => {
          if (authenticated) {
            this.router.navigateByUrl('');
          }
        });
    }
  }

  emailValidationMessage!: string | null;
  passwordValidationMessage!: string | null;

  private validate() {
    let emailValidatuion = this.validateEmail();
    let passwordValidation = this.validatePassword();
    return emailValidatuion && passwordValidation;
  }

  validateEmail() {
    if (!this.userCredentials.email) {
      this.emailValidationMessage = "Email is required";
      return false;
    }

    if (!this.userCredentials.email.match(this.emailRegex)) {
      this.emailValidationMessage = "Enter valid email";
      return false;
    }

    this.emailValidationMessage = null;
    return true;
  }

  validatePassword() {
    if (!this.userCredentials.password) {
      this.passwordValidationMessage = "Password is required";
      return false;
    }

    this.passwordValidationMessage = null;
    return true;
  }

}
