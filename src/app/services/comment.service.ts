import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl: string = environment.server.apiUrl;
  private token: string = 'Bearer ' + localStorage.getItem('token');

  constructor(
    private http: HttpClient
  ) { }

  createComment(data: any): Observable<any>{
    return this.http.post(
      `${this.baseUrl}/api/v1/comment`,
      data,
      {headers: {token: this.token}}
    )
  }

  getCommentByPost(id: any): Observable<any>{
    return this.http.get(
      `${this.baseUrl}/api/v1/comment/${id}`,
      {headers: {token: this.token}}
    )
  }
}
