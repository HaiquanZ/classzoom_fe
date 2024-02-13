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

  login(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.LOGIN, data, { observe: 'response' }).subscribe(
      (response: any) => {
        if(response.body){
          callBack(response.body);
          this.saveInfoLogin(response.body.data)
        }
      },
      error => {
        if(callBack){
          console.log(error);
          callBack(null);
        }
      }
    )
  }

  saveInfoLogin(val: any){
    localStorage.setItem('token', val.token);
    localStorage.setItem('userId', val.id);
    localStorage.setItem('username', val.username);
    localStorage.setItem('email', val.email);
    localStorage.setItem('gender', val.gender);
  }

  removeInfoLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('gender');
  }

  register(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.REGISTER, data, { observe: 'response' }).subscribe(
      (response: any) => {
        if(response.body){
          callBack(response.body);
        }
      },
      error => {
        if(callBack){
          console.log(error);
          callBack(null);
        }
      }
    )
  }
  
}
