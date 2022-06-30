import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  //  <input type="text" appNumbersOnly/>
  //  <input type="text" appNumbersOnly="6"/>
  //  <input type="text" [appNumbersOnly]="variable"/>
  @Input() appNumbersOnly? : string | number;
  constructor() { }

  @HostListener('keypress',['$event'])
  restrictToNumbers(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    const ele = event.target as HTMLInputElement;
    const length = ele.value.length;
    const expectedLength = this.appNumbersOnly ? Number(this.appNumbersOnly) : 10;
    if(length >= expectedLength || keyCode < 48 || keyCode > 57) {
      //non-numeric data
      event.preventDefault();
    }
  }

}
