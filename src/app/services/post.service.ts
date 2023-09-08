import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string = environment.server.apiUrl;
  private token: string = 'Bearer ' + localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getPostByGroupId(groupId: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/post/${groupId}`,{headers: {'token': this.token}});
  }

  createPost(data: any): Observable<any>{
    return this.http.post(
      `${this.baseUrl}/api/v1/post/create`,
      data,
      {headers: {token: this.token}}
    );
  }

  getAssignmentByUser(): Observable<any>{
    return this.http.get(
      `${this.baseUrl}/api/v1/post/assignment`,
      {headers: {'token': this.token}}
    )
  }

  getDetailAssignment(id: string): Observable<any>{
    return this.http.get(
      `${this.baseUrl}/api/v1/post/assignment/${id}`,
      {headers: {'token': this.token}}
    )
  }
}
