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
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private notification: NzNotificationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'Unknown error occurred';
                if (error.error instanceof ErrorEvent) {
                    // Xảy ra lỗi mạng hoặc lỗi không mong muốn từ phía client
                    errorMessage = `Error: ${error.error.message}`;
                    this.notification.error(
                        error.statusText,
                        error.error?.error ? error.error?.error : 'Something went wrong',
                        {
                            nzStyle: { backgroundColor: 'var(--error-light)' }
                        }
                    );
                } else {
                    // Xảy ra lỗi từ phía server
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    this.notification.error(
                        error.statusText,
                        error.error?.error ? error.error?.error : 'Something went wrong',
                        {
                            nzStyle: { backgroundColor: 'var(--error-light)' }
                        }
                    );
                }
                return throwError(errorMessage);
            })
        );
    }
}
