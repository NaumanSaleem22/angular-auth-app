import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';

  private profileUrl = 'https://api.escuelajs.co/api/v1/auth/profile';
  constructor(private http: HttpClient) { }

  login(email: any, password: any) {
    return this.http.post(this.loginUrl, {
      email, password
    })
  }
  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
  }


  getProfile() {
    const token = this.getToken();
    console.log('TOKEN:', token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })

    return this.http.get(this.profileUrl, { headers })
  }

  // !! means: value hai → true , null → false

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
