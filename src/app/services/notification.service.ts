import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification: NzNotificationService) { }

  showSuccess(message: any, title: any){
    this.notification.success(
      title,
      message,
      {
        nzStyle: { backgroundColor: 'var(--success-light)'}
      }
    );
  }
  showError(message: any, title: any){
    this.notification.error(
      title,
      message,
      {
          nzStyle: { backgroundColor: 'var(--error-light)' }
      }
    )
  }
}