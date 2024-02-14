import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostByGroupId(groupId: any): Observable<any>{
    return this.http.get(`/post/${groupId}`);
  }

  createPost(data: any): Observable<any>{
    return this.http.post(
      `/post/create`,
      data
    );
  }

  getAssignmentByUser(): Observable<any>{
    return this.http.get(
      `/post/assignment`
    )
  }

  getDetailAssignment(id: string): Observable<any>{
    return this.http.get(
      `/post/assignment/${id}`
    )
  }

  submitAnswer(data: any): Observable<any>{
    return this.http.post(
      `/post/answer`,
      data
    )
  }

  getAnswerOfUser(id: any): Observable<any>{
    return this.http.get(
      `/post/answer/${id}`
    )
  }

  getAnswerOfAssignment(id: any): Observable<any>{
    return this.http.get(
      `/post/answer-all/${id}`
    )
  }

  getFile(id: any): Observable<any>{
    return this.http.get(
      `/post/answer-file/${id}`
    )
  }
}
