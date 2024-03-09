import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:3000/users'; // URL del mock backend

  constructor(private http: HttpClient) { }

  getUserLogin(username: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.baseUrl}?username=${username}&password=${password}`)
    .pipe(
      /* map degli elementi */
      map(users => { 
        /* cercare la chiave specifica username nell'array */
        const user = users.find(u => u.username === username);
        return user || null;
      })
    );
  }
}
