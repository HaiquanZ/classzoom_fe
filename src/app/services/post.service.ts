import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostByGroupId(id: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_POST_BY_GROUPID + `/${id}`, { observe: 'response' }).subscribe(
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

  getDetailAssignment(id: string, callBack: Function): any{
    this.http.get(environment.path.post.GET_DETAIL_ASSIGNMENT + `/${id}`, { observe: 'response' }).subscribe(
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

  submitAnswer(data: any, callBack: Function): any{
    this.http.post(environment.path.post.SUBMIT_ANSWER, data, { observe: 'response' }).subscribe(
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

  getAnswerOfUser(id: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_ANSWER_USER + `/${id}`, { observe: 'response' }).subscribe(
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

  getAnswerOfAssignment(id: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_ANSWER_ASSIGNMENT + `/${id}`, { observe: 'response' }).subscribe(
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

  getFile(id: any, callBack: Function): any{
    this.http.get(environment.path.post.GET_FILE + `/${id}`, { observe: 'response' }).subscribe(
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
