import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  private resizeSubject = new Subject();

  constructor() { }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any) {
    this.resizeSubject.next(event.target.innerWidth);
  }

  get onResize$() {
    return this.resizeSubject.asObservable();
  }
}
