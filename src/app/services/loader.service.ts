import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get loader$() {
    return this.loaderSubject.asObservable();
  }
  constructor() { }

  loaderStart() {
    this.loaderSubject.next(true);
  }

  loaderEnd() {
    this.loaderSubject.next(false);
  }
}
