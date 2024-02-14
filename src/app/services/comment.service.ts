import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  createComment(data: any): Observable<any>{
    return this.http.post(
      `/comment`,
      data
    )
  }

  getCommentByPost(id: any): Observable<any>{
    return this.http.get(
      `/comment/${id}`
    )
  }
}
