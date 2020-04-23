import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(items: ProductModel[], id: number): any {
    return items.filter(item => item.category === id );
  }
}

