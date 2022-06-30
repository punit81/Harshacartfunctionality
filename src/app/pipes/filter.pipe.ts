import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: ProductType[], filterString: string): ProductType[] {
    return values.filter((item) =>
      item.productName.toLowerCase().includes(filterString.toLowerCase())
    );
  }
}
