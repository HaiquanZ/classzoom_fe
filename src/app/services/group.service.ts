import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAllGroups(option: any, callBack: Function): any{
    this.http.get(environment.path.group.GET_ALL_GROUPS, { observe: 'response' }).subscribe(
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

  createGroup(data: any): Observable<any>{
    return this.http.post(
      `/group/create`,
      data
    )
  }

  deleteGroup(id: any): Observable<any>{
    return this.http.delete(
      `/group/${id}`
    )
  }

  getUserOfGroup(id: any): Observable<any>{
    return this.http.post(
      `/group/${id}`,
      {}
    )
  }

  addMember(data: any): Observable<any>{
    return this.http.post(
      `/group/member`,
      data
    )
  }

}
