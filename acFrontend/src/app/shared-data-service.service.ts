import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  private filteredProductsSource = new BehaviorSubject<any>(null);
  filteredProducts$ = this.filteredProductsSource.asObservable();
  imageUrl = 'http://127.0.0.1:8000';

  setFilteredProducts(products: any) {
    for (const product of products) {
      product.image = this.imageUrl + product.image;
    }
    this.filteredProductsSource.next(products);
  }
}
