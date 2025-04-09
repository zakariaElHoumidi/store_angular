import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Pipe({
  name: 'searchProduct',
  standalone: true
})
export class SearchProductPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  }

}
