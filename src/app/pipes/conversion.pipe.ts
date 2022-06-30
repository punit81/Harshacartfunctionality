import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  // price | conversion : code
  transform(value: string | number, code:string = 'INR') {
    let price=Number(value);

    switch (code) {
      case 'USD':
        return (price *= 0.013);
      case 'EUR':
        return (price *= 0.012);
      case 'GBP':
        return (price *= 0.01);
      case 'CAD':
        return (price *= 0.016);
      default:
        return price;
    }
  }
}
