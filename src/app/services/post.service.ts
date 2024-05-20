import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostByGroupId(options: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_POST_BY_GROUPID, { observe: 'response', params: options }).subscribe(
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


  createPost(data: any, callBack: Function): any{
    this.http.post(environment.path.post.CREATE_POST, data, { observe: 'response' }).subscribe(
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

  getAssignmentByUser(callBack: Function): any{
    this.http.get(environment.path.post.GET_ASSIGNMENT_BY_USER, { observe: 'response' }).subscribe(
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

  getDetailAssignment(options: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_DETAIL_ASSIGNMENT, { observe: 'response', params: options }).subscribe(
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

  comment(data: any, callBack: Function): any{
    this.http.post(environment.path.post.CREATE_COMMENT, data, { observe: 'response' }).subscribe(
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

  getDetailPost(options: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_DETAIL_POST, { observe: 'response', params: options }).subscribe(
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

  createAssignment(data: any, callBack: Function): any{
    this.http.post(environment.path.post.CREATE_ASSIGNMENT, data, { observe: 'response' }).subscribe(
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

  updateTimeLine(data: any, callBack: Function){
    this.http.post(environment.path.post.UPDATE_TIMELINE, data, { observe: 'response' }).subscribe(
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

  getTask(options: any, callBack: Function){
    this.http.get(environment.path.post.GET_TASK, { observe: 'response', params: options }).subscribe(
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

  createTask(data: any, callBack: Function){
    this.http.post(environment.path.post.CREATE_TASK, data, { observe: 'response' }).subscribe(
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

  updateTask(data: any, callBack: Function){
    this.http.post(environment.path.post.UPDATE_TASK, data, { observe: 'response' }).subscribe(
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

  getTaskByPic(options: any, callBack: Function){
    this.http.get(environment.path.post.GET_TASK_BY_PIC, { observe: 'response', params: options }).subscribe(
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
