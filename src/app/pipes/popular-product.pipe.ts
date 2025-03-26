import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Pipe({
  name: 'popularProduct',
  standalone: true
})
export class PopularProductPipe implements PipeTransform {

  transform(products: IProduct[]): IProduct[] {
    return products.filter(product => product?.popular === true);
  }

}
