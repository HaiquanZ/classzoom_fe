import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private notificationSrv: NotificationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'Unknown error occurred';
                if (error.error instanceof ErrorEvent) {
                    // Xảy ra lỗi mạng hoặc lỗi không mong muốn từ phía client
                    errorMessage = `Error: ${error.error.message}`;
                    this.notificationSrv.showError(
                        error.statusText,
                        error.error?.error ? error.error?.error : 'Something went wrong',
                    );
                } else {
                    // Xảy ra lỗi từ phía server
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    this.notificationSrv.showError(
                        error.statusText,
                        error.error?.error ? error.error?.error : 'Something went wrong',
                    );
                }
                return throwError(errorMessage);
            })
        );
    }
}
