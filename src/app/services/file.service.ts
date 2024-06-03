import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getFile(options: any, callBack: Function): any {
    this.http.get(environment.path.group.GET_FILE, { observe: 'response', params: options }).subscribe(
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

  downloadFile(options: any, callBack: Function): any {
    this.http.get(environment.path.group.DOWNLOAD_FILE, { observe: 'response', params: options }).subscribe(
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

  uploadFile(req: any, callBack: Function): any {
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        (res: any) => {
          if(res.body){
            callBack(res.body);
          }
        },
        (error) => {
          if(callBack){
            console.log(error);
            callBack(null);
          }
        }
      );
  }

  deleteFile(options: any, callBack: Function): any {
    this.http.delete(environment.path.group.DELETE_FILE, { observe: 'response', params: options }).subscribe(
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
