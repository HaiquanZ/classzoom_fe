import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add token
    const token = localStorage.getItem('token'); // Thay thế bằng token của bạn
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      // 'Content-Type': 'application/json'
    });


    // add base URL
    let url = '';
    if (req.url == '/group/file' || req.url == '/group/download' || req.url == '/user/avatar' || req.url == '/user/cover') {
      url = 'http://localhost:8004' + req.url;
    } else {
      url = `${environment.server.apiUrl}${req.url}`;
    }

    // if(req.url == '/group/file' && req.method == 'POST'){
    //   headers = headers.set('Content-Type', 'multipart/form-data');
    // }

    // Clone request
    const modifiedReq = req.clone({
      url: url,
      headers: headers
    });

    return next.handle(modifiedReq);
  }
}
