import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './login-service/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorLogin: string = '';
  error: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  login() {
      this.authService.getUserLogin(this.username, this.password).subscribe(user => {
        if (user) {
          if (user.role === 'admin') {
            /* role user, verrà dirottato in dashboard Admin */
            this.router.navigate(['/dashboard/admin'], { queryParams: { username: this.username }});
          } else if (user.role === 'user') {
            /* role user, verrà dirottato alla dashboard dello user */
            this.router.navigate(['/dashboard/user'], { queryParams: { username: this.username }});
          } 
        } else {
          if (this.username === '' || this.password === '') {
            this.error = true;
            this.errorLogin = 'Credenziali non inserite';
          } else {
            this.error = true;
            this.errorLogin = 'Credenziali non valide';
          }
        }
      });
  }
}
