import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //syn type of headers with all components
  public typeHeader = new BehaviorSubject<string>('home');

  //handle log in component
  public logged = new BehaviorSubject<boolean>(false);
  constructor() { }
}
