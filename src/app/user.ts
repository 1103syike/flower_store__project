import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string) {
    return this.http.get<any[]>(
      `${this.apiURL}?email=${email}&password=${password}`
    )

  }
}
