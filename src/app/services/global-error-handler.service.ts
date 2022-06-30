import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler{
  constructor(private router: Router) { }
  handleError(error: any): void {
    console.log('UNHANDLED EXCEPTION', error);
    
  }
}
