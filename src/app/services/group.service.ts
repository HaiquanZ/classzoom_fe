import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl: string = environment.server.apiUrl;
  private token: string = 'Bearer ' + localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getAllGroups(): Observable<any>{
    console.log(this.token);
    return this.http.get(
      `${this.baseUrl}/api/v1/group`,
      {headers: {token: this.token}}
    );
  }


}
