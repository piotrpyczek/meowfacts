import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout()
      .subscribe(loggedOut => {
        if (loggedOut) {
          this.router.navigateByUrl('/login');
        }
      });
  }
}
