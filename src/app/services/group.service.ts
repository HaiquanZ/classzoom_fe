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
    this.http.get(environment.path.group.GET_ALL_GROUPS, { observe: 'response', params: option }).subscribe(
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

  createGroup(data: any, callBack: Function): any{
    this.http.post(environment.path.group.CREATE_GROUP, data, { observe: 'response' }).subscribe(
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

  deleteGroup(options: any, callBack: Function): any{
    this.http.delete(environment.path.group.DELETE_GROUP, { observe: 'response', params: options }).subscribe(
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

  getUserOfGroup(id: any, callBack: Function): any{
    this.http.post(environment.path.group.GET_MEMBERS + `/${id}`, {}, { observe: 'response' }).subscribe(
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

  addMember(data: any, callBack: Function): any{
    this.http.post(environment.path.group.ADD_MEMBER, data, { observe: 'response' }).subscribe(
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

  getDetailGroup(options: any, callBack: Function): any{
    this.http.get(environment.path.group.GET_DETAIL, { observe: 'response', params: options }).subscribe(
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

  getMemberByPost(options: any, callBack: Function){
    this.http.get(environment.path.group.GET_MEMBERS_BY_POST , { observe: 'response', params: options }).subscribe(
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
