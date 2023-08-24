import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  //syn type of headers with all components
  public typeHeader = new BehaviorSubject<string>('home');

  //handle log in component
  public logged = new BehaviorSubject<boolean>(false);

  //save information user
  email: string = '';
  id: string = '';
  gender: string = '';
  userName: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getDataTime(): Observable<any>{
    return this.http.get('https://timezone.abstractapi.com/v1/current_time/?api_key=a4629004622f41c5a315973b95d58ed2&location=Hanoi, Vietnam');
  }

  
}
