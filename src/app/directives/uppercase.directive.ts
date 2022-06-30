import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  changeCase(event: KeyboardEvent) {
    const ele = event.target as HTMLInputElement;
    ele.value = ele.value.toUpperCase();
  }

}
