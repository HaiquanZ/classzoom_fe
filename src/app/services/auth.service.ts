import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    localStorage.setItem('username', val.name);
    localStorage.setItem('email', val.email);
    localStorage.setItem('gender', val.gender);
    localStorage.setItem('avatar', val.avatar);
  }

  removeInfoLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('gender');
    localStorage.removeItem('avatar');
  }

  register(data: any, callBack: Function): any{
    data.gender = 'male';
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

  forgotPassword(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.FORGOT_PASSWORD, data, { observe: 'response' }).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }

  confirmOTP(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.CONFIRM_OTP, data, { observe: 'response' }).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }
  
  getNotebyMonth(option: any, callBack: Function): any{
    this.http.get(environment.path.calendar.GET_NOTE_MONTH, { observe: 'response', params: option }).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }

  getNotebyDay(option: any, callBack: Function): any{
    this.http.get(environment.path.calendar.GET_NOTE_DAY, { observe: 'response', params: option }).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }

  createNote(data: any, callBack: Function): any{
    this.http.post(environment.path.calendar.CREATE_NOTE, data, { observe: 'response' }).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }

  updateNote(data: any, callBack: Function): any{
    this.http.post(environment.path.calendar.UPDATE_NOTE, data, { observe: 'response' }).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }

  deleteNote(option: any, callBack: Function): any{
    this.http.delete(environment.path.calendar.DELETE_NOTE, { observe: 'response', params: option}).subscribe(
      (res: any) => {
        if(res.body){
          callBack(res.body);
        }
      },
      err => {
        if(callBack){
          console.log(err);
          callBack(null);
        }
      }
    )
  }

}
