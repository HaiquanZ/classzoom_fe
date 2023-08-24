import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.server.apiUrl;
  // save user information
  // public id = new BehaviorSubject<string>('');
  // public username = new BehaviorSubject<string>('');
  // public email = new BehaviorSubject<string>('');
  // public gender = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  login(email: any, password: any): Observable<any>{
    return this.http.post(
      `${this.baseUrl}/api/v1/user/login`,
      {email: email, password: password}
    );
  }

  register(data: any): Observable<any>{
    return this.http.post(
      `${this.baseUrl}/api/v1/user/register`,
      data
    );
  }
  
}
