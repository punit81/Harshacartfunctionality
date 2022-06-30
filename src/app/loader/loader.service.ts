import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _status = false;
  private loaderSubject = new BehaviorSubject(this._status);
  loadingObservable=this.loaderSubject.asObservable();

  constructor() { }

  showLoader() {
    this._status = true;
    this.loaderSubject.next(this._status);
  }

  hideLoader() {
    this._status = false;
    this.loaderSubject.next(this._status);
  }
}
