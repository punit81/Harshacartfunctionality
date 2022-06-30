import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject(this._code);
  // to get the currency code should subscribe to this observable
  currencyObservable =this.currencySubject.asObservable();

  constructor() { }


  updateCurrency(code: string) {
    this._code = code;
    // on every data change a notification needs to be provided
    this.currencySubject.next(this._code);
  }

}
