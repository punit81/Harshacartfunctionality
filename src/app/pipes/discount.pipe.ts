import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  // value | discount
  transform(value: any) {
    // this function should return something always
    console.log('discount pipe calculation', value);
    return '60% off';
  }

}
