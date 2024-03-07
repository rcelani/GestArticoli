import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorLogin: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Esempio di controllo delle credenziali.
    if (this.username === 'admin' && this.password === 'admin') {
      // Se le credenziali sono corrette, reindirizza l'amministratore alla dashboard di amministrazione.
      this.router.navigate(['/admin/dashboard']);
    } else if (this.username === '' && this.password === '') {
      this.error = true;
      this.errorLogin = 'Inserire le credenziali da amministratore';
    } else {
      this.error = true;
      this.errorLogin = 'Credenziali errate';
    }
  }
}
